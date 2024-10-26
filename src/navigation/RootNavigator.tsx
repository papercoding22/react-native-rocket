import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';

/**
 * Root navigator for the application.
 * @description
 * - This navigator is the entry point for the navigation.
 * - Set up the navigation container.
 * - Configure the initial navigator which is the AuthNavigator.
 * - Configure theme, and other navigation configurations.
 */
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
