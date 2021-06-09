//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ButtonStyle, HeaderBar, SearchBar } from '../components'
import { FONTS } from '../constants';
import AllCheck from '../assets/icons/icons8-check-all.svg'
import { RNCamera} from 'react-native-camera'
// create a component
const Home = () => {
    function renderTitle() {
        return (
            <View style={styles.viewTitle}>
                <Text style={{ ...FONTS.largeTitle }}>Nội thất tốt</Text>
                <Text style={{ ...FONTS.h1 }}>Hốt liền tay!</Text>
            </View>
        )
    }

    function renderCategories() {
        return (
            <ScrollView horizontal contentContainerStyle={styles.viewCate}>
                {ButtonStyle("sdsfsfsdfsdfsdfsdfs")}
            </ScrollView>
        )
    }

    function renderCamera() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={{ flex: 1, alignItems: 'center' }}
                    ref={ref => {
                        this.camera = ref
                    }}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            <HeaderBar />
            {renderTitle()}
            <SearchBar />
            {renderCategories()}
            {renderCamera()}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    viewCate: {
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
