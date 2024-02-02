import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Overview = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chandrabadani Temple Overview</Text>

      <Text style={styles.paragraph}>
        Chandrabadni Temple is a Hindu temple located in the Chandrakoot Parvat
        in Tehri Garhwal region of Uttarakhand State, India. It is situated at
        an elevation of 2,277 meters above sea level and is dedicated to Goddess
        Sati. The temple is considered to be one of the most sacred places in
        Uttarakhand and attracts a large number of devotees every year.
      </Text>

      <Text style={styles.paragraph}>
        The temple is located on top of Chandrabadni Peak, and visitors have to
        trek for around 1 km from Jhanau Village to reach the temple. The trek
        is moderate and takes around half an hour to complete. The trek offers
        breathtaking views of the surrounding hills and valleys, and visitors
        can also witness the beauty of the Himalayan range from the top.
      </Text>

      <Text style={styles.paragraph}>
        Legend has it that after the death of Goddess Sati, her body parts were
        scattered all over India, and the places where her body parts fell
        became sacred sites. It is believed that the torso of the goddess fell
        at Chandrabadni, and a temple was built on top of the peak to honor her.
      </Text>

      <Text style={styles.paragraph}>
        The temple is open throughout the year, but the best time to visit
        Chandrabadni Temple is from April to June and from September to
        November. During this time, the weather is pleasant, and the skies are
        clear, making it ideal for trekking and outdoor activities.
      </Text>

      <Text style={styles.heading}>
        Famous Tourist Attractions near Chandrabadni Temple | Places to visit near Chandrabadni Temple
      </Text>

      <Text style={styles.paragraph}>
        Chandrabadni Temple is located in the Garhwal region of Uttarakhand,
        India, and is surrounded by natural beauty and scenic landscapes.
        Visitors can explore several nearby attractions while visiting
        Chandrabadni Temple. Here are some of the top places to visit near
        Chandrabadni Temple:
      </Text>

      <Text style={styles.subHeading}>Kandoliya Temple:</Text>
      <Text style={styles.paragraph}>
        Kandoliya Temple is a popular Hindu temple located in the Tehri District
        of Uttarakhand, India. It is situated at an elevation of 1,385 meters
        above sea level and is dedicated to Lord Shiva. The temple is located
        around 20 km from Chandrabadni Temple and is surrounded by lush green
        forests and scenic views.
      </Text>

      <Text style={styles.subHeading}>New Tehri:</Text>
      <Text style={styles.paragraph}>
        New Tehri is a planned city located in the Tehri Garhwal district of
        Uttarakhand, India. It is situated at an altitude of 1,550 meters above
        sea level and is known for its scenic beauty and modern infrastructure.
        Visitors can explore the Tehri Dam, which is one of the largest
        hydroelectric projects in India, and enjoy water sports activities like
        boating and rafting.
      </Text>

      <Text style={styles.subHeading}>Chamba:</Text>
      <Text style={styles.paragraph}>
        Chamba is a small town located in the Tehri Garhwal district of
        Uttarakhand, India. It is situated at an altitude of 1,676 meters above
        sea level and is known for its natural beauty and scenic views.
        Visitors can explore the local markets and buy souvenirs like
        handicrafts and woollen clothes.
      </Text>

      <Text style={styles.subHeading}>Surkanda Devi Temple:</Text>
      <Text style={styles.paragraph}>
        Surkanda Devi Temple is a popular Hindu temple located in the Tehri
        Garhwal district of Uttarakhand, India. It is situated at an altitude of
        2,757 meters above sea level and is dedicated to Goddess Parvati.
        Visitors can trek to the temple and enjoy the scenic beauty of the
        surrounding hills and valleys.
      </Text>

      <Text style={styles.subHeading}>Tehri Garhwal:</Text>
      <Text style={styles.paragraph}>
        Tehri Lake is a man-made lake located in Tehri Garhwal district of
        Uttarakhand, India. The lake was formed after the construction of the
        Tehri Dam on the Bhagirathi River. It is a popular tourist destination
        and offers a range of activities like boating, jet skiing, and rafting.
        The surrounding hills and valleys offer stunning views, making it a
        great spot for photography and nature lovers.
      </Text>

      <Text style={styles.heading}>
        Activities to do near Chandrabadni Temple | Things to do near Chandrabadni Temple
      </Text>

      <Text style={styles.paragraph}>
        Chandrabadni Temple is surrounded by natural beauty and scenic
        landscapes, offering visitors a range of activities to enjoy. Here are
        some of the top activities to do near Chandrabadni Temple:
      </Text>

      <Text style={styles.subHeading}>Trekking:</Text>
      <Text style={styles.paragraph}>
        The trek to Chandrabadni Temple is a popular activity among visitors.
        The trek is moderate and takes around 3-4 hours to complete, offering
        breathtaking views of the surrounding hills and valleys.
      </Text>

      <Text style={styles.subHeading}>Camping:</Text>
      <Text style={styles.paragraph}>
        Visitors can camp near the Chandrabadni Temple and enjoy the serenity
        of the surrounding hills and valleys. Camping is a great way to escape
        the hustle and bustle of city life and connect with nature.
      </Text>

      <Text style={styles.subHeading}>Photography:</Text>
      <Text style={styles.paragraph}>
        The surrounding hills and valleys offer stunning views, making it a
        great spot for photography. Visitors can capture the natural beauty and
        scenic landscapes of the region.
      </Text>

      <Text style={styles.subHeading}>Nature Walks:</Text>
      <Text style={styles.paragraph}>
        Visitors can take a leisurely stroll around the temple and explore the
        nearby forests and meadows. Nature walks are a great way to relax and
        connect with nature.
      </Text>

      <Text style={styles.subHeading}>Sightseeing:</Text>
      <Text style={styles.paragraph}>
        Visitors can explore nearby attractions like Kandoliya Temple, New
        Tehri, and Chamba. These attractions offer a glimpse into the rich
        cultural and religious heritage of Uttarakhand.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  bold: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  subHeading: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Raleway-Bold',
  },
});

export default Overview;
