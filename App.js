import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home/Home';
import LoginScreen from './components/Login/Login';
import SettingsScreen from './components/Settings/Settings';
import ListOfPostsScreen from './components/ListOfPosts/ListOfPosts';
import PostViewScreen from './components/PostView/PostView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {createStackNavigator} from 'react-navigation-stack';


export const AuthContext = createContext();
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://sample-app.myshopify.io/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
  },
  {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log('Failed to restore authentication token');
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token

      try {
        await AsyncStorage.setItem('userToken', 'this is the token')
      } catch (e) {
        console.log('Error setting authentication token');
      }
      dispatch({ type: 'SIGN_IN', token: 'userToken' });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log('Failed to remove authentication token');
      }
      dispatch({ type: 'SIGN_OUT' });
    },
  }), []);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.userToken == null ? (
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen
                name='Login'
                options={{ animationTypeForReplace: state.isSignout ? 'pop' : 'push' }}
              >
                {(props) => <LoginScreen {...props} context={AuthContext} />}
              </Stack.Screen>
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='Home'>
                {(props) => <HomeScreen {...props} context={AuthContext} />}
              </Stack.Screen>
              <Stack.Screen name='Settings' component={SettingsScreen} />
              <Stack.Screen name='Newsfeed' component={ListOfPostsScreen} />
              <Stack.Screen name='View Post' component={PostViewScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}
