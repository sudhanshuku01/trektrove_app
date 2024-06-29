import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ImageCard from './ImageCard'
import About from './About'
import UKmap from './UKmap'


const Hero = () => {
  return (
    <View>
      <ImageCard />
      <UKmap />
      <About />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Hero
