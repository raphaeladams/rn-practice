import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Button from '../Button/Button';


const DATA = [
  {
    uri: 'https://i.imgur.com/TkIrScD.png',
    content: 'The quick brown fox jumped over the lazy dog.',
    date: 'Aug 1 1995',
    user: {
      name: 'Peter Griffin',
      email: 'peter@example.com'
    }
  },
  {
    uri: 'https://i.imgur.com/Bf5fz0V.jpeg',
    content: 'I don\'t know which is more discouraging, literature or chickens.',
    date: 'Sept 1 1995',
    user: {
      name: 'Lois Griffin',
      email: 'peter@example.com'
    }
  },
  {
    uri: 'https://i.imgur.com/oPJpfbB.png',
    content: 'Self-respect and a clear conscience are powerful components of integrity and are the basis for enriching your relationships with others.',
    date: 'Nov 10 2000',
    user: {
      name: 'Brian Griffin',
      email: 'peter@example.com'
    }
  }
]

export default function Item(props) {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(previousState => !previousState)

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    if (currentIndex < DATA.length - 1)
    {
      setCurrentIndex(currentIndex + 1);
    }
  }
  const prevImage = () => {
    if (currentIndex > 0)
    {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <View style={styles.itemViewContainer}>
      <View style={styles.imageSectionContainer}>
        <Image
          style={styles.image}
          source={{uri: DATA[currentIndex].uri}}
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
            {DATA[currentIndex].content}
          </Text>
        </View>
      </View>
      
      <View style={styles.bottomSectionContainer}>
        <View style={styles.bottomElementsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {DATA[currentIndex].user.name}
            </Text>
            <Text style={styles.text}>
              {DATA[currentIndex].date}
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
  itemViewContainer: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 40,
    marginBottom: 40
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
  textContainer: {
    //backgroundColor: '#fff3e6',
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
