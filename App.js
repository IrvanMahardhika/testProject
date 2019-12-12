/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Button, Platform, Dimensions } from 'react-native';


const App: () => React$Node = () => {

  const [calculation, setCalculation] = useState('0');
  const [display, setDisplay] = useState(['0'])

  const firstNumber = useRef('');
  const secondNumber = useRef('');
  const operationRecord = useRef('');
  const result = useRef(0)

  const reset = () => {
    setCalculation('0');
    setDisplay(['0']);
    firstNumber.current = '';
    secondNumber.current = '';
    operationRecord.current = '';
    result.current = '';
  };

  const getNumber = number => {
    if (calculation === '0' && number !== '.') {
      setCalculation(number);
    } else if (calculation.indexOf('.') !== -1 && number === '.') {
      return;
    } else {
      setCalculation(prevNumber => prevNumber + number);
    };
    if (display[0] === '0' && number !== '.') {
      setDisplay([number]);
    } else {
      setDisplay(prevDisplay => [...prevDisplay, ...number]);
    };

  };

  const calculate = operation => {
    let sign = display[display.length - 1];
    if (firstNumber.current === '') {
      firstNumber.current = parseFloat(calculation);
      result.current = firstNumber.current;
      setCalculation('0');
    } else {
      try {
        if ( sign === '+' || sign === '-' || sign === '/' || sign === '*' ) throw error;
        secondNumber.current = parseFloat(calculation);
        setCalculation('0');
        switch (true) {
          case operationRecord.current === '+':
            result.current = firstNumber.current + secondNumber.current;
            firstNumber.current = result.current;
            break;
          case operationRecord.current === '-':
            result.current = firstNumber.current - secondNumber.current;
            firstNumber.current = result.current;
            break;
          case operationRecord.current === '/':
            result.current = firstNumber.current / secondNumber.current;
            firstNumber.current = result.current;
            break;
          case operationRecord.current === '*':
            result.current = firstNumber.current * secondNumber.current;
            firstNumber.current = result.current;
            break;
          default:
            break;
        };
      } catch (error) {
        display.pop();
      };  
    };
    switch (true) {
      case operation === '+':
        operationRecord.current = '+';
        break;
      case operation === '-':
        operationRecord.current = '-';
        break;
      case operation === '/':
        operationRecord.current = '/';
        break;
      case operation === '*':
        operationRecord.current = '*';
        break;
      default:
        break;
    };
    setDisplay(prevDisplay => [...prevDisplay, ...operation]);
  }

  return (
    <View style={styles.container} >
      <View style={styles.result} >
        <Text style={styles.resultText} >{result.current}</Text>
      </View>
      <View style={styles.calculation} >
        <Text style={styles.calculationText} >{display.join('')}</Text>
      </View>
      <View style={styles.buttonContainer} >
        <View style={styles.numbers} >
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '7')} >
                <Text style={styles.text} >7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '8')} >
                <Text style={styles.text} >8</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '9')} >
                <Text style={styles.text} >9</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '4')} >
                <Text style={styles.text} >4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '5')} >
                <Text style={styles.text} >5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '6')} >
                <Text style={styles.text} >6</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '1')} >
                <Text style={styles.text} >1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '2')} >
                <Text style={styles.text} >2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '3')} >
                <Text style={styles.text} >3</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row} >
            <View style={styles.button} >
              <TouchableOpacity >
                <Text style={styles.text} onPress={reset} >C</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '0')} >
                <Text style={styles.text} >0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button} >
              <TouchableOpacity onPress={getNumber.bind(this, '.')} >
                <Text style={styles.text} >.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.operations} >
          <View style={styles.button} >
            <TouchableOpacity onPress={calculate.bind(this, '*')} >
              <Text style={styles.text} >*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity onPress={calculate.bind(this, '/')} >
              <Text style={styles.text} >/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity onPress={calculate.bind(this, '-')} >
              <Text style={styles.text} >-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity onPress={calculate.bind(this, '+')} >
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
    // backgroundColor: Dimensions.get('window').height <= 800 ? 'yellow' : 'blue' ,
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
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  button: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#e6e6e6',
    // backgroundColor: Platform.OS == 'android' ? 'yellow' : 'blue',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
  },
  resultText: {
    textAlign: 'right',
    fontSize: 70,
    width: '100%'
  },
  calculationText: {
    color: 'white',
    textAlign: 'right',
    fontSize: 40,
    width: '100%'
  }
});

export default App;
