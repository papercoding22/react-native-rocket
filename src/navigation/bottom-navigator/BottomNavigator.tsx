import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = ({navigation}) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
  </View>
);

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabMap = {
  Home: {
    name: 'Home',
    component: HomeScreen,
    icon: '🏠',
  },
  Settings: {
    name: 'Settings',
    component: SettingsScreen,
    icon: '⚙️',
  },
};

/**
 * @description
 * - Manages how the bottom navigation should be displayed.
 */
const BottomNavigator = () => {
  const activeTabs = [TabMap.Home, TabMap.Settings];
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            const tab = activeTabs.find(tab => tab.name === route.name);
            return <Text style={{fontSize: 20}}>{tab.icon}</Text>;
          },
        };
      }}>
      {activeTabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
