import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../Heading/Heading';


export default function ErrorScreen() {
  return (
    <View style={styles.container}>
      <Heading text={'Error :(\nsomething went wrong'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e6',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  }
});
