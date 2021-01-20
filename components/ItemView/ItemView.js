import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../Button/Button';


const DATA = [
  {
    id: '1',
    content: 'first',
    date: 'Aug 1 1995',
    user: {
      name: 'Peter Griffin',
      email: 'peter@example.com'
    }
  }
]

export default function Item(props) {
  return (
    <View style={styles.itemViewContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
        />
      </View>
      
      <View style={styles.postContentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {/* {props.content} */}
            Content content content content
          </Text>
        </View>
      </View>
      
      <View style={styles.bottomContentContainer}>
        <View style={styles.bottomElementsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {/* {props.userName} */}
              Peter Griffin
            </Text>
            <Text style={styles.text}>
              {/* {props.date} */}
              Jan 1 2020
            </Text>
          </View>

          <Button
            onPress={() => {}}
            btnText={'Like' /*loggedIn ? 'Logout' : 'Login'*/}
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

  imageContainer: {
    flex: 3,
    alignItems: 'stretch',
    backgroundColor: '#0d335d'
  },
  image: {
    height: 400,
    marginTop: 50,
    margin: 10
  },

  postContentContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  textContainer: {
    backgroundColor: '#fff3e6',
    padding: 10
  },
  text: {
    fontSize: 20,
    color: '#0d335d',
  },

  bottomContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
    backgroundColor: '#c1a1d3'
  },
  bottomElementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  }
});
