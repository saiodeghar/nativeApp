import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';



const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Toggle Switch:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={styles.status}>{isEnabled ? "Enabled" : "Disabled"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#e6e6e6",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  status: {
    fontSize: 16,
  },
});

export default Settings