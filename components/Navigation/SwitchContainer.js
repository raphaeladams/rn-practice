import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default function SwitchContainer(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.switchContainer}>
      <Text style={styles.label}>{props.text}</Text>
      <Switch
        trackColor={{ false: '#fff3e6', true: '#c1a1d3' }}
        thumbColor={'#1a508b'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 20,
    borderColor: '#0d335d',
    borderWidth: 1
  },
  label: {
    margin: 8,
    color: '#0d335d'
  }
});