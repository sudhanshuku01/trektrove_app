import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mussoorie Hill Station</Text>

      <Text style={styles.paragraph}>
        Mussoorie, also known as the Queen of Hills, is situated in the Dehradun district, approximately 35 km from Dehradun city. Positioned at an elevation of 2000m above sea level, Mussoorie offers breathtaking views of the Himalayas.
      </Text>

      <Text style={styles.paragraph}>
        One of the most visited hill stations in India, Mussoorie is renowned for its scenic beauty and is also recognized as an educational hub. It is home to prestigious schools like Convent of Jesus and Mary - Waverley, Guru Nanak Fifth Centenary School, Mussoorie Modern School, Mussoorie Public School, Oak Grove School, and Manava Bharati India International School, making it a prominent destination for quality education in India.
      </Text>

      <Text style={styles.paragraph}>
        Nestled in the Garhwal Himalayan district, Mussoorie is a charming town that was once a sought-after retreat for English officials during the summer months. The splendid climate, lush greenery, hilly surroundings, and captivating views of the exotic mountains made it an ideal escape from the summer heat in the northern part of the country.
      </Text>

      <Text style={styles.heading}>Famous Tourist Attractions near Mussoorie</Text>
      <Text style={styles.paragraph}>
        Mussoorie is a popular hill station located in the Indian state of Uttarakhand. It's surrounded by several famous tourist attractions that you might want to explore. Here are some notable ones:
      </Text>

      <Text style={styles.paragraph}>Kempty Falls: One of the most famous waterfalls in the region, Kempty Falls is known for its cascading beauty and is a great spot for picnics and relaxation.</Text>
      <Text style={styles.paragraph}>Lal Tibba: It is the highest point in Mussoorie and offers breathtaking panoramic views of the Himalayan range. There's a telescope to get a closer look at the distant peaks.</Text>
      <Text style={styles.paragraph}>Gun Hill: A popular viewpoint accessible by a cable car ride, Gun Hill provides stunning views of the surrounding hills and valleys. You can also catch a view of the sunset from here.</Text>
      <Text style={styles.paragraph}>Camel's Back Road: This road offers a picturesque walking trail with beautiful views of the mountains. It gets its name from the natural rock formation that resembles a camel's back.</Text>
      <Text style={styles.paragraph}>Mussoorie Lake: A man-made lake surrounded by lush greenery, where you can enjoy boating and horse riding. It's a peaceful spot for a leisurely day.</Text>
      <Text style={styles.paragraph}>Jharipani Falls: A quieter waterfall compared to Kempty Falls, Jharipani Falls is surrounded by dense forests, making it a great spot for a nature walk.</Text>
      <Text style={styles.paragraph}>Cloud's End: This is the westernmost point of Mussoorie and offers stunning views of the Aglar River valley. It's a serene spot with a charming old building.</Text>
      <Text style={styles.paragraph}>Sir George Everest's House: The former residence of Sir George Everest, after whom the highest peak in the world is named, this place provides a glimpse into history along with scenic surroundings.</Text>
      <Text style={styles.paragraph}>Bhatta Falls: A lesser-known waterfall, Bhatta Falls is perfect for a peaceful retreat and a refreshing dip in its clear waters.</Text>
      <Text style={styles.paragraph}>Nag Devta Temple: Located on Cart Mackenzie Road, this ancient temple dedicated to Lord Shiva offers a panoramic view of Mussoorie and the Doon Valley.</Text>
      <Text style={styles.paragraph}>Benog Wildlife Sanctuary: Nature enthusiasts will enjoy this sanctuary that's home to various flora and fauna species, along with walking trails and serene surroundings.</Text>

      <Text style={styles.heading}>Activities to do near Mussoorie</Text>
      <Text style={styles.paragraph}>
        Mussoorie and its surroundings offer a variety of activities for tourists to enjoy. Here are some popular activities you can do near Mussoorie Hill Station:
      </Text>

      <Text style={styles.paragraph}>Trekking and Hiking: There are several trekking trails in and around Mussoorie that offer different levels of difficulty. The trails take you through scenic forests, meadows, and hills, providing a wonderful opportunity to connect with nature.</Text>
      <Text style={styles.paragraph}>Cable Car Ride: Take a cable car ride to Gun Hill, the second highest point in Mussoorie, to enjoy panoramic views of the surrounding landscape. It's a thrilling experience and offers great photo opportunities.</Text>
      <Text style={styles.paragraph}>Shopping on Mall Road: Mall Road is a bustling street lined with shops offering local handicrafts, clothing, and souvenirs. It's a great place to shop for unique items and enjoy the local vibe.</Text>
      <Text style={styles.paragraph}>Adventure Sports: Mussoorie offers adventure activities like zip-lining, paragliding, and rock climbing for adrenaline enthusiasts. These activities provide a chance to experience the thrill of the mountains.</Text>
      <Text style={styles.paragraph}>Boating at Mussoorie Lake: Spend a relaxing time at Mussoorie Lake by renting paddle boats. It's a serene experience surrounded by natural beauty.</Text>
      <Text style={styles.paragraph}>Photography: Mussoorie's scenic beauty provides ample opportunities for photography. Capture the panoramic views, waterfalls, lush landscapes, and charming architecture.</Text>
      <Text style={styles.paragraph}>Visit Landour: Landour is a nearby town known for its serene environment and historical charm. Take a stroll through its narrow lanes, visit the historic churches, and enjoy the quiet ambiance.</Text>
      <Text style={styles.paragraph}>Visit Dhanaulti: A short drive from Mussoorie, Dhanaulti offers eco-parks, forest trails, and viewpoints. Enjoy activities like horse riding and visit the Eco Park for a refreshing experience.</Text>
      <Text style={styles.paragraph}>Picnicking: Many spots around Mussoorie are perfect for picnics. Pack a basket, enjoy the scenic surroundings, and have a relaxing day outdoors.</Text>
      <Text style={styles.paragraph}>Yoga and Meditation: The tranquil environment of the hills is conducive to practicing yoga and meditation. Many resorts and centers offer yoga sessions amidst natural beauty.</Text>
      <Text style={styles.paragraph}>Camping: You can find camping sites in the outskirts of Mussoorie. Spend a night under the stars, enjoy a bonfire, and experience the serenity of the mountains.</Text>
      <Text style={styles.paragraph}>Explore Local Cuisine: Try local Garhwali cuisine in the restaurants and cafes. Don't miss out on trying dishes like Aloo Ke Gutke, Bal Mithai, and Singodi.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
});

export default Overview;
