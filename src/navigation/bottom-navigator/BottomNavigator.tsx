import * as React from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import TabBarIcon from './TabBarIcon';
import {BottomNavigatorProps, Tab} from './types';

const TabStack = createBottomTabNavigator();

const getScreenOptions =
  (tabs: Tab[]) =>
  (props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
  }): BottomTabNavigationOptions => {
    return {
      tabBarIcon: ({focused, color, size}) => {
        const tab = tabs.find(item => item.name === props.route.name);
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
 * - BottomNavigator is a component that renders the bottom navigation.
 * - It is only responsible for UI styling
 */
const BottomNavigator: React.FC<BottomNavigatorProps> = ({tabs}) => {
  return (
    <TabStack.Navigator screenOptions={getScreenOptions(tabs)}>
      {tabs.map(tab => (
        <TabStack.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </TabStack.Navigator>
  );
};

export default BottomNavigator;
