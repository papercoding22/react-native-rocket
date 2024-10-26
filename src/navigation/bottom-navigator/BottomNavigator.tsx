import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import TabBarIcon from './TabBarIcon';

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

const getScreenOptions = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({focused, color, size}) => {
      const tab = Object.values(TabMap).find(
        item => item.name === props.route.name,
      );
      return (
        <TabBarIcon
          focused={focused}
          color={color}
          size={size}
          icon={tab?.icon}
        />
      );
    },
  };
};

/**
 * @description
 * - Manages how the bottom navigation should be displayed.
 * - And logic for the bottom navigation.
 */
const BottomNavigator = () => {
  const activeTabs = [TabMap.Home, TabMap.Settings];
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      {activeTabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
