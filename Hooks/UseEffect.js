import React, { useState, useCallback, useEffect } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';


const UseEffect = () => {
  const [facts, setFacts] = useState([]);

  const handleFetchCatFacts = useCallback(async () => {
    const result = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4');
    const facts = await result.json();
    if (result.ok) {
      setFacts(facts);
    }
  });

  useEffect(() => {
    handleFetchCatFacts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 1,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 1,
    fontSize: 16
  }
});

export default UseEffect;