//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const ButtonStyle = (label: string) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      
    },
});

//make this component available to the app
export default ButtonStyle;
