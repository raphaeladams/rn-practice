import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageShare from './components/ImageShare/ImageShare';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import ItemList from './components/ItemList/ItemList';
import ItemView from './components/ItemView/ItemView';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageShare /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Navigation /> */}
      {/* <ItemList /> */}
      <ItemView />
      <StatusBar style="auto" />
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
});
