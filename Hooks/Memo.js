import React, { useState, useMemo } from "react";
import {View, Text, Button} from "react-native";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <View>
      <Text
        onPress={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </Text>
      <Text>
        Fibonacci of {num} is {fib}
      </Text>
      <Button onPress={() => setNum(num + 1)} title= "+" />
    </View>
  );
};

export default MemoComponent;
