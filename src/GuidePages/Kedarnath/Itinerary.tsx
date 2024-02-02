import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Itinerary = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tour Itinerary</Text>

      <Text style={styles.heading}>
        Day Wise Itinerary to Kedarnath Dham Temple | Detailed Trek Route to Kedarnath Dham Temple
      </Text>    

      <Text style={styles.paragraph}>
        The trekking route from Rishikesh to Kedarnath is a beautiful and scenic journey that takes you through the majestic mountains of the Garhwal region. The trek is about 16.5 km long and takes around 4-5 days to complete, depending on your pace and the number of breaks you take.
      </Text>

      <Text style={styles.heading}>Here's a day-wise trekking route to Kedarnath from Rishikesh:</Text>

      <Text style={styles.subHeading}>Day 1: Rishikesh to Gaurikund</Text>
      <Text style={styles.bold}>Distance: 225 km by road</Text>

      <Text style={styles.paragraph}>
        Start your journey early in the morning from Rishikesh to Gaurikund, the base camp of the Kedarnath trek. The road journey takes about 7-8 hours and is quite scenic. You will pass through the towns of Devprayag, Srinagar, Rudraprayag, and Tilwara on the way. Once you reach Gaurikund, check into a guesthouse or campsite and rest for the night.
      </Text>

      <Text style={styles.subHeading}>Day 2: Gaurikund to Kedarnath</Text>
      <Text style={styles.bold}>Distance: 16.5 km</Text>

      <Text style={styles.paragraph}>
        Start your trek from Gaurikund to Kedarnath early in the morning. The trek is moderately difficult and takes around 6-7 hours to complete. You will pass through beautiful forests, waterfalls, and streams on the way. Once you reach Kedarnath, check into a guesthouse or campsite and rest for the night.
      </Text>

      <Text style={styles.subHeading}>Day 3: Kedarnath to Gaurikund</Text>
      <Text style={styles.bold}>Distance: 16.5 km</Text>

      <Text style={styles.paragraph}>
        Start your return journey from Kedarnath to Gaurikund early in the morning. The trek is downhill and takes around 4-5 hours to complete. Once you reach Gaurikund, rest for the night in a guesthouse or campsite.
      </Text>

      <Text style={styles.subHeading}>Day 4: Gaurikund to Rishikesh</Text>
      <Text style={styles.bold}>Distance: 225 km by road</Text>

      <Text style={styles.paragraph}>
        Start your journey back to Rishikesh early in the morning. The road journey takes about 7-8 hours and is quite scenic. You will pass through the same towns on the way. Once you reach Rishikesh, your trek to Kedarnath is complete.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Note:</Text> It is advisable to take enough breaks, carry enough water and snacks, and wear comfortable trekking shoes throughout the journey. It is also recommended to consult with a professional trekking guide or tour operator before embarking on the trek.
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

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
  
export default Itinerary;
