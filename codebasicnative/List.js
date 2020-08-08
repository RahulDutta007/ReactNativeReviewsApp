import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun'},
    { name: 'james'},
    { name: 'sully'},
    { name: 'barry'},
    { name: 'demi'},
    { name: 'sean'},
    { name: 'jammy'},
    { name: 'heck'},
    { name: 'ryan'},    
  ]);
  
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
          people.map((eachPeople, index) => 
              <View key={index}>
                <Text style={styles.eachPeople}>
                  {eachPeople.name}
                </Text>
              </View>              
          )  
        }
        </ScrollView>
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
    backgroundColor: 'grey'
  }
});
