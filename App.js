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


export const AuthContext = createContext();
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://sample-app.myshopify.io/graphql',
  cache: new InMemoryCache()
});

export default function App({ navigation }) {
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
        // restoring the token failed
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      dispatch({ type: 'SIGN_IN', token: 'an-auth-token' });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT' }),
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
