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
    marginBottom: 40,
    backgroundColor: '#c1a1d3'
  },
  text: {
    fontSize: 20,
    color: '#0d335d'
  }
});