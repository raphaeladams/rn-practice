import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TextContainer(props) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
    marginBottom: 20,
    width: '100%'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0d335d'
  }
});