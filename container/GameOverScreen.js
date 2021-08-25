import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonComponent from '../components/UI/ButtonComponent';
import Colors from '../components/UI/Colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Fim de Jogo!</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' />
      </View>
      <Text style={styles.resultText}>
        Seu celular precisou de <Text style={styles.highlight}>{props.rounds} </Text>tentativas para adivinhar o número
        <Text style={styles.highlight}> {props.chosenNumber}</Text>
      </Text>

      <ButtonComponent onPress={props.onPress}>Novo Jogo</ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 25,
    fontFamily: 'openSansBold',
  },
  imageContainer: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    borderRadius: 150,
    elevation: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultText: {
    textAlign: 'center',
  },

  highlight: {
    color: Colors.Pink,
    fontSize: 18,
  },
  button: {
    marginVertical: 20,
    color: Colors.Pink,
  },
});

export default GameOverScreen;
