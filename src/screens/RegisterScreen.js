import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RegisterScreen = props => {
    return (
        <View style={styles.screen} >
            <Text >Register Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default RegisterScreen;