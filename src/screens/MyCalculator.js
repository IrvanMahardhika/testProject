import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Button, Platform, Dimensions } from 'react-native';

const MyCalculator = props => {
    const [calculation, setCalculation] = useState('0');
    const [display, setDisplay] = useState(['0']);

    const firstNumber = useRef('');
    const secondNumber = useRef('');
    const operationRecord = useRef('');
    const result = useRef(0);

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
            if (sign === '+' || sign === '-' || sign === '/' || sign === '*') throw error;
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
    };

    let numberButton = [];
    for (let i = 1; i <=3; i++) {
        let horizontalNumberButton = [];
        for (let j = 1; j <=3; j++) {
            let number = 9 - (3 * i) + j;
            number = number.toString();
            horizontalNumberButton.push(<TouchableOpacity style={styles.button} onPress={getNumber.bind(this, number )} ><Text style={styles.text} >{number}</Text></TouchableOpacity>)
        };
        numberButton.push(<View style={styles.row} >{horizontalNumberButton}</View>);
    };

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
                    {numberButton}
                    <View style={styles.row} >
                        <TouchableOpacity style={styles.button} onPress={reset} >
                            <Text style={styles.text} >C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={getNumber.bind(this, '0')} >
                            <Text style={styles.text} >0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={getNumber.bind(this, '.')} >
                            <Text style={styles.text} >.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operations} >
                    <TouchableOpacity style={styles.button} onPress={calculate.bind(this, '*')} >
                        <Text style={styles.text} >*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={calculate.bind(this, '/')} >
                        <Text style={styles.text} >/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={calculate.bind(this, '-')} >
                        <Text style={styles.text} >-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={calculate.bind(this, '+')} >
                        <Text style={styles.text} >+</Text>
                    </TouchableOpacity>
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

export default MyCalculator;