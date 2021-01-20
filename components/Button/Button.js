import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.button}
    >
      <Text style={styles.buttonText}>
        {props.btnText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1a508b',
    padding: 15,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    fontSize: 20,
    color: '#fff3e6'
  }
});
