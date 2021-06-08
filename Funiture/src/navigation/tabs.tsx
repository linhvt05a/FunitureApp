import React, { FC } from 'react'
import { Home, Search, Bag, Setting, Account } from '../screens'
import { FONTS, SIZE, COLORS, ROUTE, icons } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator()

const Tabs = (props: any) => {
    return (
        <Tab.Navigator tabBarOptions=
            {{
                showLabel: false,
                style: styles.tabStyle
            }}
        >
            <Tab.Screen name={ROUTE.HOME} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        renderTabItem(focused, ROUTE.HOME, icons.home)
                    )
                }} />
            <Tab.Screen name={ROUTE.SEARCH} component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    renderTabItem(focused, ROUTE.SEARCH, icons.search)
                )
            }} />
            <Tab.Screen name={ROUTE.BAG} component={Bag} options={{
                tabBarIcon: ({ focused }) => (
                    renderTabItem(focused, ROUTE.BAG, icons.bag)
                ),
                tabBarButton: (props) => (
                    <TabarCustomButton {...props} />
                )

            }} />
            <Tab.Screen name={ROUTE.SETTING} component={Setting} options={{
                tabBarIcon: ({ focused }) => (
                    renderTabItem(focused, ROUTE.SETTING, icons.setting)
                )
            }} />
            <Tab.Screen name={ROUTE.ACCOUNT} component={Account} options={{
                tabBarIcon: ({ focused }) => (
                    renderTabItem(focused, ROUTE.ACCOUNT, icons.account)
                )
            }} />
        </Tab.Navigator>
    )
}

const TabarCustomButton = (children: any) => {
    return (
        <TouchableOpacity style={styles.tabCustom} onPress={children.onPress}>
            <View style={styles.tabView}>
                {children.children}
            </View>
        </TouchableOpacity>
    )
}
const renderTabItem = (focused: boolean, label: string, icon: any) => {
    return (
        <Image
            source={icon}
            resizeMode='contain'
            style={{ width: 30, height: 30, tintColor: focused ? COLORS.primary : COLORS.secondary }} />
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: 'white',
        borderTopColor: 'transparent',
        height: 80
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabCustom: {
        justifyContent: 'center',
        alignItems: 'center',
        top:-30
    },
    tabView: {
        width: 60, 
        justifyContent: 'center', 
        alignItems: 'center',
         height: 60, 
         borderRadius: 35, 
         backgroundColor: COLORS.aliceblue,
         shadowOpacity: 3,
         shadowRadius: 10
    }
})
export default Tabs