import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('jammy');
  const [person, setPerson] = useState({ name: 'rahul', age: 40})

  const pressHandler = () => {
    name === 'jammy' ? setName('Rahul') : setName('jammy'); 
    name === 'jammy' ? setPerson({name: 'Rahul', age: 40})  : setPerson({name: 'jammy', age: 41})    
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>His name is {person.name} and age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update state' onPress={pressHandler}/>
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
  buttonContainer: {
    marginTop: 20
  }
});
