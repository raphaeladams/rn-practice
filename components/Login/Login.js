import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import Button from '../Button/Button';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(props.context);

  let attemptLogin = () => {
    if (email === '' || password === '') {
      alert('Email and password must be filled out');
      return;
    } else {
      signIn({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
        style={styles.logo}
      />
      <TextInput
        style={styles.textBox}
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textBox}
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
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
    backgroundColor: '#fff3e6',
    alignItems: 'stretch',
    padding: 20,
    justifyContent: 'center'
  },
  textBox: {
    alignItems: 'center',
    height: 40,
    borderColor: '#0d335d',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    margin: 10,
    padding: 10
  },
  logo: {
    height: 250,
    marginBottom: 30
  }
});
