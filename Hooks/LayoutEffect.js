import React, { useState, useLayoutEffect, useRef } from "react";
import { View, Text, TextInput, } from "react-native";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <View>
      <Text>useLayoutEffect Example</Text>
      <Text>textarea width: {width}px</Text>
      <Text>textarea height: {height}px</Text>
      {/* <TextInput
        onPress={() => {
          setWidth(0);
        }}
        value={el}
      /> */}
    </View>
  );
};

export default LayoutEffectComponent;
