import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Pink,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'openSansRegular',
  },
});

export default ButtonComponent;
