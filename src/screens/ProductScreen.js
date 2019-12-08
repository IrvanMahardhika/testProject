import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ProductScreen = props => {

    const {navigate} = props.navigation

    return (
        <View style={styles.screen} >
            <Text >Product Screen</Text>
            <Button title="Open Product" onPress={()=>navigate('ProductDetailScreen')} />
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

export default ProductScreen;