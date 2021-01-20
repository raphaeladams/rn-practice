import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../Button/Button';


export default function Item(props) {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(previousState => !previousState)

  return (
    <View style={styles.itemContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
    marginBottom: 40,
    backgroundColor: '#c1a1d3'
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a508b',
    padding: 10,
    marginBottom: 10
  },
  avatar: {
    flex: 1,
    width: 50,
    margin: 10
  },
  userTextContainer: {
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: '#fff3e6',
    alignItems: 'flex-end',
    padding: 10,
    margin: 10
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
