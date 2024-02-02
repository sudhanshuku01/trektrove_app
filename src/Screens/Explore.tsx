import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExplorePage from '../components/Explore/ExplorePage';
import Header from '../components/Header';
const Explore = () => {
  return (
    <ScrollView style={styles.Explore} showsVerticalScrollIndicator={false}>
      <Header />
      <ExplorePage />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Explore: {
    backgroundColor: '#ffffff',
  },
});
export default Explore;
