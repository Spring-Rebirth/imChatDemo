/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css'
import React from 'react';
import { Example } from './screens/Example';
import { View, StatusBar, Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#007AFF"
        translucent={Platform.OS === 'android'}
      />
      <View style={styles.backgroundStyle}>
        <Example />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
