import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

export const COLORS = {
    primary:"black",
    secondary:"grey",

    aliceblue:"#f0f8ff",
    darkblue:"#00008b"
}

export const SIZE = {
    // global style
    base: 8,
    font: 14, 
    padding: 10,
    radius: 30,
    padding2: 12,
    // app font size 
    largeTitle : 50,
    h1:30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    // app dimension
    width,
    height
}

export const FONTS = {
    largeTitle :{fontFamily:"Robo-medium",fontSize: SIZE.largeTitle, lineHeight: 50},

    h1 :{fontFamily:"",fontSize: SIZE.h1, lineHeight: 36},
    h2 :{fontFamily:"",fontSize: SIZE.h2, lineHeight: 30},
    h3 :{fontFamily:"",fontSize: SIZE.h3, lineHeight: 22},
    h4 :{fontFamily:"",fontSize: SIZE.h4, lineHeight: 22},

    body1 :{fontFamily:"",fontSize: SIZE.body1, lineHeight: 36},
    body2 :{fontFamily:"",fontSize: SIZE.body2, lineHeight: 30},
    body3 :{fontFamily:"",fontSize: SIZE.body3, lineHeight: 22},
    body4 :{fontFamily:"",fontSize: SIZE.body4, lineHeight: 22},
    body5 :{fontFamily:"",fontSize: SIZE.body5, lineHeight: 22},
    
}

const appTheme = {COLORS, SIZE, FONTS}

export default appTheme