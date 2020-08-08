import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          Hello, World!
        </Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
        <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
        <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
      </View>
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
  header: {
    backgroundColor: 'black',
    padding: 20    
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white'    
  },
  body: {
    backgroundColor: 'grey'
  }
});
