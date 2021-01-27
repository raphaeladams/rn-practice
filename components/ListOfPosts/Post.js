import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../Button/Button';
import gravatar from 'gravatar';
import { useNavigation } from '@react-navigation/native';


export default function Post(props) {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(previousState => !previousState);

  const navigation = useNavigation();
  const goToPostView = () => {
    navigation.navigate('View Post', { postId: props.id })
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: gravatar.url(props.email, {protocol: 'https'}) }}
        />
        <View style={styles.userTextContainer}>
          <Text style={styles.text}>
            {props.userName}
          </Text>
          <Text style={styles.text}>
          {props.date}
        </Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          {props.content}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={toggleLiked}
          btnText={liked ? 'Unlike' : 'Like'}
        />
        <Button
          onPress={goToPostView}
          btnText={'View'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a508b',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  avatar: {
    flex: 1,
    width: '100%',
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff3e6'
  },
  userTextContainer: {
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: '#fff3e6',
    alignItems: 'flex-end',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 20,
    color: '#0d335d',
  },
  contentContainer: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
