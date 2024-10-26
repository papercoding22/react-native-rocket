import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

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

const HomeScreen = ({navigation}) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
  </View>
);

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group>
        <AppStack.Screen name="Home" component={HomeScreen} />
      </AppStack.Group>
      {/* Grouping Modals */}
      <AppStack.Group screenOptions={{presentation: 'modal'}}>
        <AppStack.Screen name="Modal" component={ModalScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};

export default AppNavigator;
