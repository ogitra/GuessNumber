import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from './UI/Card';
import Colors from './UI/Colors';
import ButtonComponent from './UI/ButtonComponent';

const ChosenNumber = (props) => {
  return (
    <View style={styles.container}>
      <Card cardStyle={styles.card}>
        <Text>Sua Escolha:</Text>
        <Text style={styles.chosenNumber}>{props.chosenNumber}</Text>
        <View>
          <ButtonComponent onPress={props.onPressButton}>START</ButtonComponent>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  chosenNumber: {
    fontSize: 45,
    color: Colors.Pink,
    marginBottom: 10,
  },

  buttonComponent: {
    width: '20%',
  },
});

export default ChosenNumber;
