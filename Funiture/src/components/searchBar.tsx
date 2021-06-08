//import liraries
import React, { Component } from 'react';
import { View,StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { icons } from '../constants';

// create a component
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.searchBtn}>
                <Image source={icons.search} style={styles.searchIcon}/>
            </TouchableOpacity>
            <TextInput style={styles.txtField} placeholder="Nhập nội thất bạn muốn..."/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      top: 40,
      left: 16
    },
    txtField:{
        height: 36,
        borderRadius:8,
        paddingLeft: 30,
        width: 300,
    },
    searchIcon:{
        width: 22, height: 22
    },
    searchBtn:{
       position: 'absolute',
        top: 8,
        left: 8
    }
});

//make this component available to the app
export default SearchBar;
