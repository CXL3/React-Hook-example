import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <Text>Counter: {count}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setCount((currentValue) => currentValue + 1)}
        >
          <Text style={styles.buttons}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCount((currentValue) => currentValue - 1)}
        >
          <Text style={styles.buttons}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    padding: 10,
  },
});

export default UseStateComponent;
