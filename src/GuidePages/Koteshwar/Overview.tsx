import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Koteshwar Mahadev Temple – Rudraprayag</Text>

      <Text style={styles.paragraph}>
        Koteshwar Mahadev Temple is located on the bank of the Alaknanda River in the Rudraprayag District of Uttarakhand, India. Situated about 3 km from the Main Market in the Garhwal Region, the temple is primarily dedicated to Lord Shiva. The unique feature of the temple being inside a cave near the holy river Alaknanda provides a panoramic scenic view of nature, attracting the attention of many tourists and devotees. The cave houses over 1000 naturally occurring ancient Shivalingas, with approximately 10-15 Shivalingas visible while coming down to the temple. The cave is approximately 150 m from the road head where visitors can easily purchase "Pooja ka Saman" (worship items).
      </Text>

      <Text style={styles.heading}>History of Koteshwar Mahadev Temple</Text>

      <Text style={styles.paragraph}>
        Koteshwar Mahadev Temple has a rich mythological background with two connected legends. According to one legend, Lord Shiva meditated here on his way to Kedarnath. Another legend involves a demon named Bhasmasur, who, after receiving the power from Lord Shiva, attempted to destroy him. Lord Shiva sought refuge in the cave of Koteshwar (now known as Koteshwar Mahadev Temple) and meditated to seek help from Lord Vishnu. Lord Vishnu, in the avatar of "Mohini," saved Lord Shiva by attracting the demon towards her dance. The demon, excitedly touching his own head, turned into ashes. Devotees from distant places visit Koteshwar Dham Temple to seek blessings from Lord Shiva.
      </Text>

      <Text style={styles.heading}>Things to do in Koteshwar Mahadev Temple</Text>

      <Text style={styles.subHeading}>Meditation</Text>

      <Text style={styles.paragraph}>
        Far from the rush and crowd, situated on the bank of the Alaknanda River, Koteshwar Mahadev Temple is an ideal location for meditation. The chirping sound of birds, the flowing sound of Alaknanda's pure water, and the scenic nature views create a peaceful atmosphere. Devotees can experience a nature-relaxing therapy amidst the devotion of people and the temple bell sound.
      </Text>

      <Text style={styles.subHeading}>Explore Rudraprayag</Text>

      <Text style={styles.paragraph}>
        Rudraprayag, one of the five prayags where the holy Alaknanda and Holy Mandakani River meet, offers exciting places to explore. Visitors can witness the "Sangam" and explore Rudraprayag market, buy traditional Pahadi items like "Pahadi Topi," enjoy delicious Pahadi cuisines, and try the local sweet "Baal Mithai."
      </Text>

      <Text style={styles.heading}>Famous Tourist Attractions near Koteshwar Mahadev Temple</Text>

      <Text style={styles.paragraph}>
        Dedicated to Lord Shiva, Koteshwar Mahadev Temple is located on the bank of the Alaknanda River in Rudraprayag District, Uttarakhand, in the Garhwal Region. Devotees visit Koteshwar Dham Temple to seek blessings from Lord Shiva. Nearby tourist attractions include:
      </Text>

      <Text style={styles.bold}>1. Dhari Devi Temple</Text>
      <Text style={styles.bold}>2. Kartik Swami Temple</Text>
      <Text style={styles.bold}>3. Augustmuni Town</Text>
      <Text style={styles.bold}>4. Karmajeet Temple</Text>
      <Text style={styles.bold}>5. Basukedar Temple</Text>
      <Text style={styles.bold}>6. Syalsaur</Text>
      <Text style={styles.bold}>7. Ukhimath Town</Text>
      <Text style={styles.bold}>8. Omkareshwar Temple</Text>
      <Text style={styles.bold}>9. Tungnath Mahadev Temple</Text>
      <Text style={styles.bold}>10. Chopta Valley</Text>
      <Text style={styles.bold}>11. Makkumath</Text>
    </View>
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
