import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button/Button';
import SwitchContainer from './SwitchContainer';
import Heading from '../Heading/Heading';

export default function Navigation(props) {
  const goToItemList = () => props.navigation.navigate('ItemList');

  return (
    <View style={styles.container}>
      <Heading text={'This is the Navigation Screen. You can enable a lot of awesome stuff here!'} />
      
      <SwitchContainer text={'Option 1'} />
      <SwitchContainer text={'Option 2'} />
      <SwitchContainer text={'Option 3'} />
      <Button
        onPress={goToItemList}
        btnText={'View Item List'}
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
