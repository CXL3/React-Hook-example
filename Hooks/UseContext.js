import React, { useState, useContext, createContext } from "react";
import { View, Text, Button } from "react-native";

const UserContext = createContext([
    // default state
  {
    firstName: "Bob",
    lastName: "Bobberson",
    suffix: 1,
    email: "bobbobberson@example.com",
  },
  // setState
  (obj) => obj,
]);

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <View>
      <Text>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</Text>
      <Button
        onPress={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
        title="Add Suffix"
      />
    </View>
  );
};

const LevelFour = () => (
  <View>
    <Text>fourth level</Text>
    <LevelFive />
  </View>
);

const LevelThree = () => (
  <View>
    <Text>third level</Text>
    <LevelFour />
  </View>
);

const LevelTwo = () => (
  <View>
    <Text>second level</Text>
    <LevelThree />
  </View>
);

const ContextComponent = () => {
  const userState = useState({
    firstName: "James",
    lastName: "Jameson",
    suffix: 1,
    email: "jamesjameson@example.com",
  });

  return (
    <UserContext.Provider value={userState}>
      <Text>first level</Text>
      <LevelTwo />
    </UserContext.Provider>
  );
};

export default ContextComponent;
