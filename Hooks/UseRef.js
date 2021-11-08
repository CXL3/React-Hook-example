import React, { useState, useRef } from "react";
import { Text,View, Button } from 'react-native';

const RefComponent = () => {
    //start at 0
  const [stateNumber, setStateNumber] = useState(0);
  //start at 0
  const numRef = useRef(0);

  // button click will
  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  return (
    <View>
    
      <Text>useRef Example</Text>
      <Button onPress={incrementAndDelayLogging} title="delay logging"/>
      <Text>state: {stateNumber}</Text>
      <Text>ref: {numRef.current}</Text>
    </View>
  );
};

export default RefComponent;
