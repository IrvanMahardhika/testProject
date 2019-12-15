import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { jsxOpeningFragment, validate } from '@babel/types';

const HisCalculator = props => {

    const [resultText, setResultText] = useState('');
    const [calcText, setCalcText] = useState('');
    const operations = useRef(['DEL', '+', '-', '*', '/']);

    const validate = () => {
        const text = resultText;
        switch (text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
            default:
                break;
        };
        return true;
    };

    const calculateResult = () => {
        const text = resultText;
        // eval tidak boleh digunakan pada user input krn dapat men trigger function
        // eval dapat digunakan disini karena user input nya dibatasi hanya angka dan tanda baca
        setCalcText(eval(text));
    };

    const buttonPressed = (text) => {
        if (text === '=') {
            // jika validate() bernilai false maka calculateResult() tidak ada dijalankan
            return validate() && calculateResult(resultText);
        };
        setResultText(prevText => prevText + text);
    };

    const operate = operation => {
        switch (operation) {
            case 'DEL':
                const text = resultText.split('');
                text.pop();
                setResultText(text.join(''));
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                const lastCharacter = resultText.split('').pop();
                if (operations.current.indexOf(lastCharacter) !== -1) return;
                if (resultText === '') return;
                setResultText(prevText => prevText + operation);
            default:
                break;
        };
    };

    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity key={nums[i][j]} onPress={buttonPressed.bind(this, nums[i][j])} style={styles.button} >
                <Text style={styles.buttonText} >{nums[i][j]}</Text>
            </TouchableOpacity>);
        };
        rows.push(<View key={i} style={styles.row} >{row}</View>)
    };
    let ops = [];
    for (let i = 0; i < 5; i++) {
        ops.push(<TouchableOpacity key={operations.current[i]} onPress={operate.bind(this, operations.current[i])} style={styles.button} >
            <Text style={[styles.buttonText, styles.white]} >{operations.current[i]}</Text>
        </TouchableOpacity>);
    };

    return (
        <View style={styles.container} >
            <View style={styles.result} >
                <Text style={styles.resultText} >{resultText}</Text>
            </View>
            <View style={styles.calculation} >
                <Text style={styles.calculationText} >{calcText}</Text>
            </View>
            <View style={styles.buttonContainer} >
                <View style={styles.numbers} >
                    {rows}
                </View>
                <View style={styles.operation} >
                    {ops}
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
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttonContainer: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: '#434343'
    },
    operation: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#636363'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    resultText: {
        fontSize: 30
    },
    calculationText: {
        fontSize: 24
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 30,
        color: 'white'
    },
    white: {
        color: 'white'
    }
});

export default HisCalculator;