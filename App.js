/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';


const App: () => React$Node = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (newText) => {
    setUsername(newText);
  }

  const handleChangePassword = (newText) => {
    setPassword(newText);
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
      <View style={styles.screen}  >
        <Text >Username {username}</Text>
        <TextInput  defaultValue={username} onChangeText={handleChangeUsername} />
        <Text >Password {password}</Text>
        <TextInput  defaultValue={password} onChangeText={handleChangePassword} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
});

export default App;
