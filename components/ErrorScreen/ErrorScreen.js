import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../Heading/Heading';

export default function ErrorScreen() {
  return (
    <View style={styles.container}>
      <Heading
        text={'Error :( something went wrong'}
      />
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
  }
});
