import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1'},
    { name: 'james', id: '2'},
    { name: 'sully', id: '3'},
    { name: 'barry', id: '4'},
    { name: 'demi', id: '5'},
    { name: 'sean', id: '6'},
    { name: 'jammy', id: '7'},
    { name: 'heck', id: '8'},
    { name: 'ryan', id: '9'},    
  ]);
  
  return (
    <View style={styles.container}>
        
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.eachPeople}>
            {item.name}
          </Text>
        )}       
      />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  eachPeople: {
    marginTop: 24,
    padding: 20,
    fontSize: 24,
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginTop: 24,
    width: 100
  }
});
