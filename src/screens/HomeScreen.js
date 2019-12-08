import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = props => {

    const {navigate} = props.navigation

    return (
        <View style={styles.screen} >
            <Text >Home Screen</Text>
            <Button title="Open Profile" onPress={()=>navigate('ProfileScreen', {name : 'Andi'})} />
            <Button title="Product List" onPress={()=>navigate('ProductStack')} />
            <Button title="Product Detail" onPress={()=>navigate('ProductDetailScreen')} />
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

export default HomeScreen;