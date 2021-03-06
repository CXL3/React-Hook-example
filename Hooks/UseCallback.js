import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';


const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(current => current + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(current => current - 1);
  }, []);

  return (
    <SafeAreaView>
      <Text> UseCallback Counter: {count}</Text>

    <View style={styles.buttons}>
      <TouchableOpacity onPress={handleIncrement}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDecrement}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default UseCallback;