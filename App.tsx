import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigator from './src/navigation/RootNavigator';

import './global.css';
import TestGestureScreen from './src/screens/TestGestureScreen';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <RootNavigator /> */}
      <TestGestureScreen />
    </GestureHandlerRootView>
  );
}

export default App;
