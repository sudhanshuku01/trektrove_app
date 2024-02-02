import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kedarnath Dham Overview</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Kedarnath Dham</Text> is one of the Char Dhams
        of Uttarakhand, located in the district of Rudraprayag. The Kedarnath
        temple, situated at an elevation of 3500m above sea level near Chorabari
        Glacier in Kedarnath Town, is renowned as one of the most sacred temples
        in India.
      </Text>

      <Text style={styles.paragraph}>
        Dedicated to Lord Shiva, this ancient temple showcases exquisite
        architecture constructed from large, evenly shaped grey stone slabs. A
        conical rock formation inside the temple is worshipped as Lord Shiva.
        The Kedarnath temple is not only a significant part of the Char Dham
        pilgrimage circuit but also holds the status of being one of the 12
        Jyotirlingas of Lord Shiva in India. Standing behind the temple are the
        majestic peaks of Kedarnath, Kedar Dome, and other Himalayan summits.
      </Text>

      <Text style={styles.heading}>History of Kedarnath Temple</Text>

      <Text style={styles.paragraph}>
        The historical name of the Kedarnath region is "Kedar Khand." According
        to legend, following their victory in the epic Mahabharata, the Pandavas
        sought redemption for the guilt of killing many people. They sought the
        blessings of Lord Shiva, who eluded them and took refuge at Kedarnath in
        the form of a bull. The Lord dived into the ground, leaving his hump on
        the surface at Kedarnath. Revived around the 8th century CE by Guru Adi
        Shankaracharya, a great Hindu philosopher, the Kedarnath Dham Temple
        holds historical significance.
      </Text>

      <Text style={styles.heading}>
        Activities to do in Kedarnath Dham | Things to do in Kedarnath Dham
      </Text>

      <Text style={styles.paragraph}>
        Kedarnath is a town located in the state of Uttarakhand, India. It is
        situated in the Garhwal Himalayas and is one of the four sacred places
        in Hinduism. Here are some activities you can do near Kedarnath:
      </Text>

      <Text style={styles.subHeading}>Trekking:</Text>
      <Text style={styles.paragraph}>
        Kedarnath is around 16 Km from Gaurikund, the last motorable place to
        reach Kedarnath. This 16km trek will surely give you a wonderful
        trekking experience through a rough hilly area, small waterfalls, mini
        glaciers, and scenic views of nature.
      </Text>

      <Text style={styles.subHeading}>Meditation:</Text>
      <Text style={styles.paragraph}>
        Kedarnath is a holy place; Sant and sadhus meditate here and pray here
        to show their devotion towards Lord Shiva. One can meditate here to
        refresh their inner soul.
      </Text>
      <Text style={styles.subHeading}> Camping in Kedarnath:</Text>
      <Text style={styles.paragraph}>
        A part from Meditation and Trekking, one can also setup their camps
        according to rules and regulations and enjoy scenic beauty of kedar
        Ghati without any commercial touch.
      </Text>
      <Text style={styles.subHeading}>Pilgrimage: </Text>
      <Text style={styles.paragraph}>
        The Kedarnath Temple is one of the most important pilgrimage sites for
        Hindus. It is dedicated to Lord Shiva and is believed to have been built
        by the Pandavas. The temple is located at an altitude of 3,583 meters
        and can be reached by trekking for about 16 kilometers.
      </Text>
      <Text style={styles.subHeading}>Trek to Vasuki Tal:</Text>
      <Text style={styles.paragraph}>
        Vasuki Tal is a beautiful high-altitude lake located near Kedarnath. The
        trek to Vasuki Tal starts from Kedarnath and is about 8 kilometers long.
        The lake is surrounded by snow-capped mountains and offers breathtaking
        views of the Himalayas.
      </Text>
      <Text style={styles.subHeading}>Visit Gandhi Sarovar:</Text>
      <Text style={styles.paragraph}>
        Gandhi Sarovar is a beautiful lake located near Kedarnath. It is named
        after Mahatma Gandhi and is considered to be a holy site. The lake is
        surrounded by snow-capped mountains and offers stunning views of the
        Himalayas.
      </Text>
      <Text style={styles.subHeading}>Trek to Kedartal:</Text>
      <Text style={styles.paragraph}>
        Kedartal is a high-altitude lake located near Kedarnath. The trek to
        Kedartal starts from Gangotri and is about 17 kilometers long. The lake
        is surrounded by snow-capped mountains and offers stunning views of the
        Himalayas.
      </Text>
      <Text style={styles.subHeading}>Visit Gaurikund: </Text>
      <Text style={styles.paragraph}>
        Gaurikund is a small town located near Kedarnath. It is considered to be
        a holy site and is named after Goddess Parvati, who is also known as
        Gauri. It is the starting point for the trek to Kedarnath and is located
        at an altitude of 1,982 meters.
      </Text>
      <Text style={styles.subHeading}>Go on a wildlife safari:</Text>
      <Text style={styles.paragraph}>
        The Kedarnath Wildlife Sanctuary is home to a variety of wildlife
        species, including musk deer, snow leopard, and Himalayan black bear.
        You can go on a wildlife safari to explore the sanctuary and spot these
        animals in their natural habitat.
      </Text>
      <Text style={styles.subHeading}>
        Explore the local markets and culture:
      </Text>
      <Text style={styles.paragraph}>
        The local markets in Kedarnath offer a variety of souvenirs and
        handicrafts. You can explore these markets and buy souvenirs to take
        back home.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 23,
    marginTop:15,
    fontFamily:'Poppins-Black'
  },
  paragraph: {
    fontSize: 16,
    marginVertical:5,
    lineHeight: 22,
    fontFamily:'PlusJakartaSans-Regular'
  },
  bold: {
    fontSize: 16,
    marginVertical:5,
    lineHeight: 22,
    fontFamily:'PlusJakartaSans-Bold'
  },
  heading: {
    fontSize: 22,
    marginTop:15,
    marginBottom:5,
    fontFamily:'Raleway-Bold'
  },
  subHeading: {
    fontSize: 18,
    marginTop:15,
    fontFamily:'Raleway-Bold'
  },
});

export default Overview;
