import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Button from '../Button/Button';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { useQuery } from '@apollo/client';
import POST_QUERY from './PostQuery';


const IMAGES = [
  'https://i.imgur.com/TkIrScD.png',
  'https://i.imgur.com/Bf5fz0V.jpeg',
  'https://i.imgur.com/oPJpfbB.png'
]

export default function PostView({ route }) {
  const { postId } = route.params;
  const { loading, error, data } = useQuery(POST_QUERY, { variables: { id: postId } });

  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(previousState => !previousState);

  const [imageIndex, setImageIndex] = useState(0);

  if (loading) return <LoadingScreen />;
  if (error) {
    console.log(error);
    return <ErrorScreen />;
  }
  
  const nextImage = () => {
    if (imageIndex < IMAGES.length - 1) setImageIndex(imageIndex + 1);
  };

  const prevImage = () => {
    if (imageIndex > 0) setImageIndex(imageIndex - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageSectionContainer}>
        <Image
          style={styles.image}
          source={{ uri: IMAGES[imageIndex] }}
        />
      </View>

      <View style={styles.navButtonSectionContainer}>
        <View style={styles.navButtonsContainer}>
          <TouchableOpacity
            onPress={prevImage}
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>
              {'<'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={nextImage}
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.postSectionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {data.micropost.content}
          </Text>
        </View>
      </View>
      
      <View style={styles.bottomSectionContainer}>
        <View style={styles.bottomElementsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {data.micropost.user.name}
            </Text>
            <Text style={styles.text}>
              {data.micropost.updatedAt}
            </Text>
          </View>

          <Button
            onPress={toggleLiked}
            btnText={liked ? 'Unlike' : 'Like'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e6',
    alignItems: 'stretch',
    padding: 20,
    justifyContent: 'center'
  },
  
  imageSectionContainer: {
    flex: 3,
    alignItems: 'stretch',
    backgroundColor: '#0d335d',
    marginBottom: 15,
    resizeMode: 'contain'
  },
  image: {
    height: '100%'
  },

  navButtonSectionContainer: {
    flex: 0.5
  },
  navButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 5
  },
  navButtonText: {
    fontSize: 40,
    color: '#1a508b'
  },

  postSectionContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    color: '#0d335d',
  },

  bottomSectionContainer: {
    flex: 0.5,
    alignItems: 'stretch',
    backgroundColor: '#c1a1d3',
    borderRadius: 5,
    padding: 10
  },
  bottomElementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
