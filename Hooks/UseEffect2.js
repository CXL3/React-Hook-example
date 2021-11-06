import React, { useState, useEffect } from "react";
import {View, Text} from "react-native"

const EffectComponent2 = () => {
  // starts out with the current time
  const [time, setTime] = useState(new Date());
  // schedule somethiing to happen after the first render
  // rerender every 1 second
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timer);
    // "}[]);"--- it means no dependancy ---just do once and never again- componentDidMount
    //"}[time]"---rerender this when time changes
    // [time, setTime]---- anything you reference outside the body here, I need that to be a data dependency here
    // empty means anything chanes please reschedule
  });

  return (
    <View>
      <Text>useEffect Example: {time.toLocaleTimeString()}</Text>
    </View>
  );
};

export default EffectComponent2;
