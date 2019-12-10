/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';


const App: () => React$Node = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (newText) => {
    setUsername(newText);
  }

  const handleChangePassword = (newText) => {
    setPassword(newText);
  }

  const buttonPress = () => {

  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
      <View style={styles.screen}  >
        <Text >Username {username}</Text>
        <TextInput style={styles.input}  defaultValue={username} onChangeText={handleChangeUsername} />
        <Text >Password {password}</Text>
        <TextInput style={styles.input}  defaultValue={password} onChangeText={handleChangePassword} />
        <View style={styles.buttonContainer} >
          <Button title="Hello" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default App;
