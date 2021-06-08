//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderBar, SearchBar} from '../components'
import { FONTS } from '../constants';

// create a component
const Home = () => {
    function renderTitle(){
        return(
            <View style={styles.viewTitle}>
                <Text style={{...FONTS.body1}}>Nội thất tốt</Text>
                <Text style={{...FONTS.body2}}>Hốt liền tay</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderBar />
            {renderTitle()}
            <SearchBar />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
    },
    viewTitle:{
        top: 20,
        left: 16
    }
});

//make this component available to the app
export default Home;
