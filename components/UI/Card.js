import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return <View style={{ ...styles.container, ...props.cardStyle }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '75%',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0.26,
    elevation: 5.5,
    borderRadius: 8,
  },
});
export default Card;
