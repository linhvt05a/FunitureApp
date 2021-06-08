//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { images, icons } from '../constants'
// create a component
const HeaderBar = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.userBtn}>
                    <Image source={images.userImage} style={styles.userImage} />
                </TouchableOpacity>
                <View style={styles.viewIcon}>
                    <TouchableOpacity style={styles.cartBtn}>
                        <Image source={icons.shoppingCart} style={styles.cartIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notiBtn}>
                        <Image source={icons.notification} style={styles.notiIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    userBtn: {left: 16},
    cartBtn: {},
    notiBtn: {},
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ffff'
    },
    cartIcon: {
        width: 25, height: 25,
        right: 5
    },
    notiIcon: {
        width: 25, height: 25
    },
    viewIcon: {
        flexDirection: 'row',
        right: 16,
    }

});

//make this component available to the app
export default HeaderBar;
