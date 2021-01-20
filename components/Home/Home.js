import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Button from '../Button/Button';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  let logInOrOut = () => {
    if (loggedIn) {
      // log out
      setLoggedIn(false);
    } else {
      // go to login page
      setLoggedIn(true);
    }
  };

  let enterApp = () => {
    if (loggedIn) {
      // go to navigation
    } else {
      // go to login screen
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={enterApp}
        style={styles.appButton}
      >
        <Text style={styles.appButtonText}>
          Enter App!
        </Text>
      </TouchableOpacity>
      <Button
        onPress={logInOrOut}
        btnText={loggedIn ? 'Logout' : 'Login'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
