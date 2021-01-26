import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button/Button';
import SwitchContainer from './SwitchContainer';
import Heading from '../Heading/Heading';

export default function Settings(props) {
  const goToListOfPosts = () => props.navigation.navigate('Newsfeed');

  return (
    <View style={styles.container}>
      <Heading
        text={'Settings'}
      />
      <SwitchContainer text={'Option 1'} />
      <SwitchContainer text={'Option 2'} />
      <SwitchContainer text={'Option 3'} />
      <Button
        onPress={goToListOfPosts}
        btnText={'Newsfeed'}
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
