/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';


const App: () => React$Node = () => {

  const [result, setResult] = useState(1000);
  const [calculation, setCalculation] = useState('10*100')  

  return (
    <View style={styles.container} >
      <View style={styles.result} >
        <Text style={styles.resultText} >{result}</Text>
      </View>
      <View style={styles.calculation} >
        <Text style={styles.calculationText} >{calculation}</Text>
      </View>
      <View style={styles.buttonContainer} >
        <View style={styles.numbers} >
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >8</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >9</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >6</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >3</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >""</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} >.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.operations} >
          <View style={styles.button} >
            <TouchableOpacity >
              <Text style={styles.text} >*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity >
              <Text style={styles.text} >/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity >
              <Text style={styles.text} >-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity >
              <Text style={styles.text} >+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3
  },
  operations: {
    flex: 1,
    backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  button: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#e6e6e6'
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 50,
    height: '100%'
  },
  resultText: {
    color: 'white',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 70,
    width: '100%'
  },
  calculationText: {
    color: 'white',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 40,
    width: '100%'
  }
});

export default App;
