import React from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator'


export default function App() {

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },

  scoll: {
    paddingLeft: 16,
    paddingRight: 16
  }
});
