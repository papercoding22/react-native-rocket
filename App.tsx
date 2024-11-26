import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigator from './src/navigation/RootNavigator';

import './global.css';
import { GluestackUIProvider } from './src/components/ui/gluestack-ui-provider';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigator />
      </GestureHandlerRootView>
    </GluestackUIProvider>
  );
}

export default App;
