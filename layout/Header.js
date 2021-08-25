import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultStyles from '../components/UI/DefaultStyles';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: DefaultStyles.pink.color,
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'montserratBold',
    fontSize: 25,
    color: 'white',
  },
});

export default Header;
