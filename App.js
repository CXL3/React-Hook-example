
import React from 'react';
// import UseStateComponent from './Hooks/UseStateComponent';
// import UseCallback from './Hooks/UseCallback';
import UseEffect from './Hooks/UseEffect';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UseStateComponent /> */}
      {/* <UseCallback /> */}
      <UseEffect /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
