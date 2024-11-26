import React from 'react';
import {Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import TestGestureScreen from '../screens/TestGestureScreen';

const AuthStack = createNativeStackNavigator();

const LoginScreen = () => <Text>Login Screen</Text>;
const SplashScreen = () => <Text>Splash Screen</Text>;
const HelpScreen = () => <Text>Help Screen</Text>;

/**
 * Authentication navigator for the application.
 * @description
 * - This navigator is used to manage the authentication flow.
 * - Contains the logic for the authentication flow.
 * - Navigate to the appropriate screen based on the authentication state.
 */
const AuthNavigator = () => {
  const isAuthenticated = true;
  const isLoading = false;

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthStack.Navigator>
      {isAuthenticated ? (
        <AuthStack.Screen
          options={{headerShown: false}}
          name="AppNavigator"
          component={AppNavigator}
        />
      ) : (
        <AuthStack.Screen name="Login" component={LoginScreen} />
      )}
      {/* Shared screen */}
      <AuthStack.Group navigationKey={isAuthenticated ? 'user' : 'guest'}>
        <AuthStack.Screen name="Help" component={HelpScreen} />
        {__DEV__ ? (
          <AuthStack.Screen name="Test" component={TestGestureScreen} />
        ) : null}
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
