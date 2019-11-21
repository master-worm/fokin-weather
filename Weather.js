import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0B0", "#d39d38"],
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["373b44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Just don't go outside"
    }, 
    Drizle:{
        iconName: "weather-hail",
        gradient: ["#89f7fe", "#66a6ff"]

    } ,
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00c6fb", "#005bea"]

    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7de2fc", "#b9b6e5"]

    },
    Atomosphere: {
        iconName: "weather-hail",
        gradient: ["#89f7fe", "#66a6ff"]

    } ,
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fef253", "#ff7300"],
        title: "Clear",
        subtitle: "Today Nice Weather!"

    }, 
    Clouds:{
        iconName: "weather-hail",
        gradient: ["#d7d2cc", "#304352"]

    },
   
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4da0B0", "#d39d38"]

    },
    Dust:{ 
        iconName: "weather-hail",
        gradient: ["#4da0B0", "#d39d38"],
        title: "Dust",
        subtitle: "Thanks a lot China"

    }
};

export default function Weather({temp, condition})  {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="Light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size = {96} 
                    name = {weatherOptions[condition].iconName}
                    color="white"
                />        
                <Text style = {styles.temp}>{temp}</Text>

            </View>
            <View style= {{...styles.halfContainer, ...styles.textContainer}} >
                
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                
            </View>
        </LinearGradient>
        
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizle", 
        "Rain", 
        "Snow", 
        "Atomosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10

    },
    subtitle:{
        fontWeight: "600",
        color : "white",
        fontSize: 24


    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }

});