import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LoginScreen = props => {
    return (
        <View style={styles.screen} >
            <Text >Login Screen</Text>
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

export default LoginScreen;