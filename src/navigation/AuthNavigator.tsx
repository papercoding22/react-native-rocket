import React from 'react';
import {Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const HomeScreen = () => <Text>Home Screen</Text>;
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
  const isAuthenticated = false;
  const isLoading = false;

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthStack.Navigator>
      {isAuthenticated ? (
        <AuthStack.Screen name="Home" component={HomeScreen} />
      ) : (
        <AuthStack.Screen name="Login" component={LoginScreen} />
      )}
			{/* Shared screen */}
      <AuthStack.Group navigationKey={isAuthenticated ? 'user' : 'guest'}>
        <AuthStack.Screen name="Help" component={HelpScreen} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
