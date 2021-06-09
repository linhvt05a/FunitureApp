//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { icons, SIZE } from '../constants';

// create a component
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.txtField} placeholder="Nhập nội thất bạn muốn..." />
            <TouchableOpacity style={styles.searchBtn}>
                <Image source={icons.search} style={styles.searchIcon} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        top: 40,
        left: 16
    },
    txtField: {
        height: 36,
        borderRadius: 8,
        paddingLeft: 35,
        width: SIZE.width - 30,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        paddingHorizontal:5

    },
    searchIcon: {
        width: 20, height: 22
    },
    searchBtn: {
        position: 'absolute',
        top: 8,
        left: 8
    }
});

//make this component available to the app
export default SearchBar;
