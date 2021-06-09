//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ButtonStyle, HeaderBar, SearchBar } from '../components'
import { FONTS } from '../constants';
import AllCheck from '../assets/icons/icons8-check-all.svg'
// create a component
const Home = () => {
    function renderTitle() {
        return (
            <View style={styles.viewTitle}>
                <Text style={{ ...FONTS.body1 }}>Nội thất tốt</Text>
                <Text style={{ ...FONTS.body2 }}>Hốt liền tay</Text>
               <TouchableOpacity>
                    <AllCheck width={20} height={40}/>
               </TouchableOpacity>
            </View>
        )
    }

    function renderCategories(){
        return (
            <ScrollView horizontal contentContainerStyle={styles.viewCate}>
                {ButtonStyle("sdsfsfsdfsdfsdfsdfs")}
                
            </ScrollView>
        )
    }

    return (
        <ScrollView>
            <HeaderBar />
            {renderTitle()}
            <SearchBar />
            {renderCategories()}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    viewCate:{
        marginTop: 60,
        left: 16
    },
    viewTitle: {
        top: 20,
        left: 16
    }
});

//make this component available to the app
export default Home;
