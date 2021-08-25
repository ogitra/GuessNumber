import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './layout/Header';
import StartGame from './container/StartGame';
import GuessScreen from './container/GuessScreen';
import GameOverScreen from './container/GameOverScreen';

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [roundsToWin, setRoundsToWin] = useState(0);
  const [loaded] = useFonts({
    montserratRegular: require('./assets/Fonts/Montserrat-Regular.ttf'),
    montserratBold: require('./assets/Fonts/Montserrat-Bold.ttf'),
    openSansRegular: require('./assets/Fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/Fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const startGameHandler = (enteredValue) => {
    setSelectedNumber(enteredValue);
  };

  const backHandler = () => {
    setRoundsToWin(0);
    setSelectedNumber(0);
  };

  let screen = <StartGame onPressStartGame={startGameHandler}></StartGame>;

  if (selectedNumber > 0 && roundsToWin == 0) {
    screen = (
      <GuessScreen chosenNumber={selectedNumber} backHandler={backHandler} totalRounds={setRoundsToWin}></GuessScreen>
    );
  } else if (roundsToWin > 0) {
    screen = (
      <GameOverScreen
        backHandler={backHandler}
        rounds={roundsToWin}
        chosenNumber={selectedNumber}
        onPress={backHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'></Header>
      {screen}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;
