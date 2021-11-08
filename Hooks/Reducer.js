import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

// fancy logic to make sure the number is between 0 and 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <View>
      <Text style={{ color: `rgb(${r}, ${g}, ${b})` }}>useReducer Example</Text>
      <View>
        <Text>r</Text>
        <Button onPress={() => dispatch({ type: "INCREMENT_R" })} title= "+"/>
        <Button onPress={() => dispatch({ type: "DECREMENT_R" })} title= "-"/>
      </View>
      <View>
        <Text>g</Text>
        <Button onPress={() => dispatch({ type: "INCREMENT_G" })} title= "+"/>
        <Button onPress={() => dispatch({ type: "DECREMENT_G" })} title= "-"/>
      </View>
      <View>
        <Text>b</Text>
        <Button onPress={() => dispatch({ type: "INCREMENT_B" })} title= "+"/>
        <Button onPress={() => dispatch({ type: "DECREMENT_B" })} title= "-"/>
      </View>
    </View>
  );
};

export default ReducerComponent;
