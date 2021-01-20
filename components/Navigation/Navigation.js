import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button/Button';
import SwitchContainer from './SwitchContainer';
import Heading from '../Heading/Heading';

export default function Navigation() {
  return (
    <View style={styles.container}>
      <Heading text={'This is the main menu. You can enable a lot of awesome stuff here!'} />
      
      <SwitchContainer text={'Option 1'} />
      <SwitchContainer text={'Option 2'} />
      <SwitchContainer text={'Option 3'} />
      <Button
        onPress={() => {}} // what should this button do?
        btnText={'Next'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#0d335d'
  }
});
