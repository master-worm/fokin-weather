import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axois from "axios";
import Weather from './Weather';

const API_KEY = "dc5f19f3c1b5d2281c6b8675ea7f289b";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: { main: {temp}, weather} } = await  axois.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main,
      temp
    });
    console.log({ data: { main: {temp}, weather}});
  };

  
  getLocation = async () => {
  try{
    
    await Location.requestPermissionsAsync();
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
    
    this.getWeather(latitude, longitude);
    this.setState({ isLoading: false});
  } catch (error){
    Alert.alert("Cant find you.", "So sad");

  }
  };
  componentDidMount(){
    this.getLocation();
  }


  render() { 
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={"Haze"} />;
  }
  
}
