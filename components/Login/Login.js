import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import Button from '../Button/Button';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  let attemptLogin = () => {
    if (email === '' || pwd === '') {
      alert('Email and password must be filled out');
      return;
      //setLoggedIn(true);
    } else {
      // popup message saying welcome!
      // go to navigation
      //setLoggedIn(false);
    }
  };

  // let enterApp = () => {
  //   if (loggedIn) {
  //     // go to itemList
  //   } else {
  //     // go to login screen
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
        style={styles.logo}
      />
      <TextInput
        style={styles.textBox}
        placeholder={'Email'}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textBox}
        placeholder={'Password'}
        onChangeText={(text) => setPwd(text)}
        value={pwd}
      />
      <Button
        onPress={attemptLogin}
        btnText={'Login'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  textBox: {
    alignItems: 'center',
    height: 40,
    borderColor: '#0d335d',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    margin: 10
  },
  logo: {
    height: 250,
    marginBottom: 30
  }
});
