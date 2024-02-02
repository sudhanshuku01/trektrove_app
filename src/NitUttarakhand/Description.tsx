import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Description = () => {
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome to NIT Uttarakhand</Text>
      <Text style={styles.paragraph}>
        Your gateway to academic excellence amidst the breathtaking landscapes
        of Uttarakhand! Nestled in the lap of the Himalayas, our campus not only
        offers top-notch education but also provides a unique opportunity to
        explore the natural wonders of this picturesque region.
      </Text>

      <View style={styles.highlight}>
        <Text style={styles.subHeading}>Explore with Yuva Tourism Club:</Text>
        <Text style={styles.paragraph}>
          At NIT Uttarakhand, we take pride in fostering a holistic educational
          experience, and our Yuva Tourism Club plays a pivotal role in this
          endeavor. The club is dedicated to unraveling the hidden gems of
          Uttarakhand, offering students a chance to connect with the rich
          cultural and natural heritage that surrounds our campus.
        </Text>
      </View>

      <Text style={styles.subHeading}>Key Features:</Text>
      <View style={styles.featureList}>
        <Text style={styles.featureItem}>
          <Text style={styles.featureTitle}>Scenic Campus:</Text> Our campus is
          surrounded by lush greenery and panoramic mountain views, providing an
          inspiring environment for learning and exploration.
        </Text>
        <Text style={styles.featureItem}>
          <Text style={styles.featureTitle}>Yuva Tourism Club:</Text> Led by
          passionate individuals, the Yuva Tourism Club organizes regular trips,
          treks, and cultural events, allowing students to immerse themselves in
          the diverse tapestry of Uttarakhand's attractions.
        </Text>
        <Text style={styles.featureItem}>
          <Text style={styles.featureTitle}>Educational Excursions:</Text> NIT
          Uttarakhand believes in learning beyond textbooks. The club arranges
          educational excursions to historical sites, wildlife sanctuaries, and
          renowned tourist spots to enrich students' knowledge and broaden their
          perspectives.
        </Text>
        <Text style={styles.featureItem}>
          <Text style={styles.featureTitle}>Adventure Opportunities:</Text> For
          the adventure enthusiasts, Uttarakhand offers trekking trails, river
          rafting, and camping experiences. The Yuva Tourism Club facilitates
          these activities, ensuring students make the most of their time here.
        </Text>
      </View>

      <Text style={styles.subHeading}>Connect with Nature:</Text>
      <Text style={styles.paragraph}>
        Escape the hustle and bustle of city life and embrace the tranquility of
        our campus. Surrounded by mountains, rivers, and forests, NIT
        Uttarakhand provides an ideal setting for those seeking a harmonious
        blend of academic pursuits and nature exploration.
      </Text>

      <Text style={styles.subHeading}>Get Involved:</Text>
      <Text style={styles.paragraph}>
        Join the Yuva Tourism Club and become a part of a community that values
        curiosity, adventure, and cultural exchange. Whether you are interested
        in organizing events, participating in treks, or simply appreciating the
        beauty around, there's a place for everyone in our vibrant tourism
        community.
      </Text>

      <Text style={styles.ending}>
        Come be a part of NIT Uttarakhand - where education meets exploration,
        and every day is an opportunity to discover something new!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#4d6160',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 22,
    color: '#493736',
    fontFamily: 'PlusJakartaSans-Regular',
    borderRadius: 20,
  },
  highlight: {
    borderRadius: 10,
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 22,
    fontFamily: 'Raleway-Bold',
    marginVertical: 10,
    color: '#343A40',
  },
  featureList: {
    marginLeft: 15,
  },
  featureItem: {
    marginBottom: 10,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#343A40',
    fontSize: 16,
  },
  featureTitle: {
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#007BFF',
    fontSize: 17,
  },
  ending: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#495057',
  },
});

export default Description;
