/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StaticPositionViewModel from './src/viewModels/StaticPositionViewModel';






function App(): React.JSX.Element {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <StaticPositionViewModel/>
     
    </SafeAreaView>
  );
}



export default App;
