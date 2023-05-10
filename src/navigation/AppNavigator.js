import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import AuthenticationNavigator from './navigators/AuthenticationNavigator';
import HomeNavigator from './navigators/MainNavigator';

import UserNavigator from './navigators/UserNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.auth.loggedIn);
  const token = useSelector(state => state.auth.token);
  console.log(isAuthenticated);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // esconde o título da screen
      }}>
      {token ? (
        <>
          <Stack.Screen name="Home" component={HomeNavigator} />
          <Stack.Screen name="UserNavigator" component={UserNavigator} />
        </>
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
