import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import tentimg from '../images/tent.png';

const Object_PoCat = [
  [tentimg, 'Camping'],
  [tentimg, 'Camping'],
  [tentimg, 'Camping'],
  [tentimg, 'Camping'],
  [tentimg, 'Camping'],
  [tentimg, 'Camping'],
  [tentimg, 'Camping'],
];

const PopularCategory = () => {
  return (
    <View style={styles.popcat}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Category</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}>
        {Object_PoCat.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category[0]} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category[1]}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  popcat: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#3498db',
  },
  categoryContainer: {
    flexDirection: 'row',
    gap:15
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius:20,
    marginBottom: 5,
    backgroundColor:'#f0ffa0'
  },
  categoryText: {
    fontSize: 14,
    textAlign:'center'
  },
});

export default PopularCategory;
