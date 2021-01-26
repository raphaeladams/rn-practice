import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Button from '../Button/Button';


export default function Home(props) {
  const { signOut } = useContext(props.context);
  const [loggedIn, setLoggedIn] = useState(!props.context.isSignout);
  
  const goToNewsfeed = () => props.navigation.navigate('Newsfeed');
  const goToSettings = () => props.navigation.navigate('Settings');
  const goToLogin = () => props.navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={loggedIn ? goToNewsfeed : goToLogin}
        style={styles.appButton}
      >
        <Text style={styles.appButtonText}>
          APP
        </Text>
      </TouchableOpacity>
      <Button
        btnText={'Settings'}
        onPress={goToSettings}
      />
      <Button
        btnText={loggedIn ? 'Logout' : 'Login'}
        onPress={loggedIn ? signOut : goToLogin}
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
  appButton: {
    alignItems: 'center',
    backgroundColor: '#c1a1d3',
    padding: 50,
    borderRadius: 5,
    margin: 10
  },
  appButtonText: {
    fontSize: 30,
    color: '#0d335d'
  }
});
