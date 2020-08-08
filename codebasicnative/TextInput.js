import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('jammy');
  const [age, setAge] = useState('30')

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        multiline        
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 19'
        onChangeText={(value) => setAge(value)}
      />

      <Text>His name is {name} and age is {age}</Text>      
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
  input: {
    borderWidth: 5,
    borderColor: '#777',   
    padding: 8,
    margin: 10,
    width: 200
  }
});
