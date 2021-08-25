import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Card from '../components/UI/Card';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../components/UI/Colors';

const generateRandomNumber = (min, max, excludes) => {
  min = Math.ceil(min);
  max = Math.max(max);
  const rndNumber = Math.floor(Math.random() * (max - min) + min);
  if (rndNumber == excludes) {
    return generateRandomNumber(min, max, excludes);
  } else {
    return rndNumber;
  }
};

const GuessScreen = (props) => {
  const [machineNumber, setMachineNumber] = useState(generateRandomNumber(1, 100, props.chosenNumber));
  const [oldMachineNumbers, setOldMachineNumbers] = useState([]);
  const [chosenNumber] = useState(props.chosenNumber);
  const [showOldGuesses, setShowOldGuesses] = useState(false);

  const low = useRef(1);
  const high = useRef(100);

  const generateNumber = (buttonChosed) => {
    if (
      (buttonChosed === 'dec' && machineNumber < chosenNumber) ||
      (buttonChosed === 'inc' && machineNumber > chosenNumber)
    ) {
      Alert.alert('Tá roubando...', 'Escolha a opção correta', [{ text: 'Back', style: 'cancel' }]);
      return;
    }
    switch (buttonChosed) {
      case 'dec':
        high.current = machineNumber;
        break;
      case 'inc':
        low.current = machineNumber;
        break;
    }
    setOldMachineNumbers([...oldMachineNumbers, machineNumber]);
    setMachineNumber(generateRandomNumber(low.current, high.current, machineNumber));
    setShowOldGuesses(true);
  };

  if (machineNumber == chosenNumber) {
    props.totalRounds(oldMachineNumbers.length);
  }

  let guessesContainer;
  if (showOldGuesses) {
    guessesContainer = (
      <View style={styles.oldGuesses}>
        <Text style={styles.oldGuessesTitle}>Já foram: </Text>
        <View style={styles.oldGuessesList}>
          {oldMachineNumbers.map((item) => (
            <Text key={Math.random()}>{item} - </Text>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Palpite da Máquina</Text>
      <View style={styles.opponentNumberBox}>
        <Text style={styles.opponentNumberBox__text}>{machineNumber}</Text>
      </View>
      <Card cardStyle={styles.card}>
        <AntDesign
          name='minussquare'
          onPress={generateNumber.bind(this, 'dec')}
          size={70}
          color={Colors.Pink}
        ></AntDesign>

        <AntDesign
          name='plussquare'
          onPress={generateNumber.bind(this, 'inc')}
          size={70}
          color={Colors.Pink}
        ></AntDesign>
      </Card>
      {guessesContainer}

      <Ionicons
        name='md-arrow-back'
        size={45}
        color={Colors.Pink}
        onPress={props.backHandler}
        style={styles.backIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'montserratBold',
    fontSize: 19,
    marginVertical: 20,
  },
  opponentNumberBox: {
    borderColor: Colors.Pink,
    borderWidth: 3,
    padding: 15,
    marginBottom: 40,
    width: '25%',
  },
  opponentNumberBox__text: {
    fontSize: 35,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  oldGuesses: {
    marginBottom: 40,
  },
  oldGuessesTitle: {
    fontFamily: 'openSansBold',
    textAlign: 'center',
  },
  oldGuessesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '70%',
  },
});
export default GuessScreen;
