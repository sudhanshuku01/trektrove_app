import React, { useState } from 'react'
import axios from 'axios';
import { weatherData } from './weatherdata';
interface WeatherProps{
  location:string,
}
import { ImageBackground,Image, StyleSheet, Text, View } from 'react-native'

const Weather:React.FC<WeatherProps> = ({location}) => {
    
   const fetchWeather=async (location:string)=>{
    try {
        const response = await axios.request({
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: location},
            headers: {
              'X-RapidAPI-Key': 'ecc90a9a5amsh95fd0d71abad895p15dc34jsnc4c1393e5086',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
   }

  return (
    <View style={styles.weather} >
        <Image  
        style={styles.weathericon}
        source={{
          uri:`${weatherData.current.condition.icon}`
        }}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  weather:{

  },
  weathericon:{
     width:60,
     height:60
  }
})

export default Weather
