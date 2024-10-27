import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import BottomTabContainer from './bottom-navigator/BottomTabContainer';

const AppStack = createNativeStackNavigator();

const ModalScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group>
        <AppStack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomNavigator"
          component={BottomTabContainer}
        />
      </AppStack.Group>
      {/* Grouping Modals */}
      <AppStack.Group screenOptions={{presentation: 'modal'}}>
        <AppStack.Screen name="Modal" component={ModalScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};

export default AppNavigator;
