import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard } from 'react-native';
import Card from '../components/UI/Card';
import ButtonComponent from '../components/UI/ButtonComponent';
import ChosenNumber from '../components/ChosenNumber';

const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [showChosenCard, setshowChosenCard] = useState(false);

  const onChangeHandler = (value) => {
    setEnteredValue(value.replace(/[^0-9]/g, ''));
  };

  let displayCard;

  if (showChosenCard) {
    displayCard = (
      <ChosenNumber
        chosenNumber={enteredValue}
        onPressButton={() => props.onPressStartGame(enteredValue)}
      ></ChosenNumber>
    );
  }

  const displayCardFalse = () => setshowChosenCard(false);

  const displayCardTrue = () => {
    setshowChosenCard(true);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Começar a rodada!</Text>
      <Card>
        <Text>Escolha um número</Text>
        <TextInput
          style={styles.input}
          keyboardType={'number-pad'}
          maxLength={2}
          onChangeText={onChangeHandler}
        ></TextInput>
        <View style={styles.buttonGroup}>
          <ButtonComponent onPress={displayCardFalse}>Voltar</ButtonComponent>
          <ButtonComponent onPress={displayCardTrue} disabled={enteredValue > 0 ? false : true}>
            Seguir
          </ButtonComponent>
        </View>
      </Card>
      {displayCard}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 19,
    marginVertical: 20,
    fontFamily: 'openSansBold',
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '20%',
    textAlign: 'center',
    fontSize: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
export default StartGame;
