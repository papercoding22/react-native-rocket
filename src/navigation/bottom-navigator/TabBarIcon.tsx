import {Text} from 'react-native';
import React from 'react';

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  icon?: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
  focused,
  color,
  size,
  icon,
}) => {
  return <Text style={{fontSize: 20}}>{icon}</Text>;
};

export default TabBarIcon;
