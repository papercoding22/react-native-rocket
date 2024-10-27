import {View, Text, Button} from 'react-native';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import {Tab} from './types';
import Logo from '../../assets/icons/egghead.svg';

const HomeScreen = ({navigation}) => (
  <View>
    <Text>Home Screen</Text>
    <Logo width={100} height={100} />
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

const TabMap: Record<string, Tab> = {
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
 * - It is responsible for initializing tabs
 */
const BottomTabContainer = () => {
  const activeTabs = [TabMap.Home, TabMap.Settings];
  return <BottomNavigator tabs={activeTabs} />;
};

export default BottomTabContainer;
