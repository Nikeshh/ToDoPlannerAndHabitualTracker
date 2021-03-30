import React from 'react';
import { StyleSheet, View } from 'react-native';
import Launch from './Launch';

export default function App() {
  return (
    <View style={styles.container}>
      <Launch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',  
  }
});
