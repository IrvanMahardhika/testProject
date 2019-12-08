import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileScreen = props => {

    const {getParam} = props.navigation

    return (
        <View style={styles.screen} >
            <Text >Profile Screen of {getParam('name', 'no-name')}</Text>
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

export default ProfileScreen;