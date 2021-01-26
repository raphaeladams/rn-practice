import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../Heading/Heading';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Heading
        text={'Loading...'}
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
