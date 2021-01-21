import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageShare from './components/ImageShare/ImageShare';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import ItemList from './components/ItemList/ItemList';
import ItemView from './components/ItemView/ItemView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

function NavigationScreen() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

function ItemListScreen() {
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  );
}

function ItemViewScreen() {
  return (
    <View style={styles.container}>
      <ItemView />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Navigation' component={NavigationScreen} />
        <Stack.Screen name='ItemList' component={ItemListScreen} />
        <Stack.Screen name='ItemView' component={ItemViewScreen} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <ImageShare />
        <Home />
        <Login />
        <Navigation />
        <ItemList />
        <ItemView />
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
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
