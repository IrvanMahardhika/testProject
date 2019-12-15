import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

const HisCalculator = props => {

    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [, 0, '=']];
    for (let i = 0; i < 4; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} >{nums[i][j]}</Text>
            </TouchableOpacity>);
        };
        rows.push(<View style={styles.row} >{row}</View>)
    };

    let operations = ['+', '-', '*', '/'];
    let ops = [];
    for (let i = 0; i < 4; i++) {
        ops.push(<TouchableOpacity style={styles.button} >
            <Text style={[styles.buttonText, styles.white]} >{operations[i]}</Text>
        </TouchableOpacity>);
    };

    return (
        <View style={styles.container} >
            <View style={styles.result} >
                <Text style={styles.resultText} >11*11</Text>
            </View>
            <View style={styles.calculation} >
                <Text style={styles.calculationText} >121</Text>
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
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttonContainer: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: 'yellow'
    },
    operation: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'black'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    resultText: {
        fontSize: 30,
        color: 'white'
    },
    calculationText: {
        fontSize: 24,
        color: 'white'
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 30
    },
    white: {
        color: 'white'
    }
});

export default HisCalculator;