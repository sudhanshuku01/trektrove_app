import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tungnath Overview</Text>

      <Text style={styles.paragraph}>
        Around 3600m from sea level, Tungnath Mahadev Temple is dedicated to Lord Shiva, situated in Chandranath Parvat Chopta in the Rudraprayag district of Uttarakhand State. It is considered as the World’s Highest Lord Shiva Temple.
      </Text>

      <Text style={styles.paragraph}>
        Tungnath Temple is the third (Tritya) Kedar in the pecking order of Panch Kedars Temples of Uttarakhand and is considered to be more than 10,000 years old. The temple is surrounded by meadows and offers a panoramic view of Himalayan Peaks like Chukhamba, Trishul Parvat, Panchchuli Peak, Nanda Devi, etc.
      </Text>

      <Text style={styles.heading}>History of Tungnath Temple</Text>

      <Text style={styles.paragraph}>
        According to legends, it is believed that Vyas Rishi told Pandavas that they were guilty of killing their own brothers in the war, and their sins would be expiated only if Lord Shiva pardoned them. The Pandavas started on their journey to find Lord Shiva after the Kurukshetra war. However, since Lord Shiva was angry about all the deaths, he wanted to avoid them, as a result of which he turned into a bull and disappeared into the ground with all his body parts scattered in different places. His hump appeared at Kedarnath, bahu at Tungnath, head at Rudranath, stomach and navels at Madhyamaheshwar, and jata at Kalpeshwar. A temple was built by the Pandavas at this place to worship Lord Shiva and please him. The name of the temple has been derived as 'Tung' meaning arms and 'Nath' symbolizing Lord Shiva.
      </Text>

      <Text style={styles.heading}>Chopta - Tungnath Temple Trek and Distance</Text>

      <Text style={styles.paragraph}>
        Chopta - Tungnath is around a 3.5 km moderate trek starting from Chopta market. The Tungnath trek takes around 2 to 3 hours, offering an amazing scenic view of meadows and Himalayan peaks. During winter, the Tungnath trek gets tough due to heavy snowfall, so make sure to carry trekking boots, a thick winter jacket for the cold, sunscreen, water, and prescribed medicines from the doctor.
      </Text>

      <Text style={styles.heading}>Opening and Closing Date of Tungnath Temple</Text>

      <Text style={styles.paragraph}>
        The Tungnath Temple opens when the Char Dhams of Uttarakhand are opened during April or May every year during Vaisakh Panchmi on the date decided by the Badri Kedar Temple Committee on Baisakhi. The temple is closed during the winter season after Diwali, and the “Doly” of the deity is moved to Mukumath Temple, which lies 19 km away from Tungnath, by the temple priests during this time.
      </Text>

      <Text style={styles.heading}>Activities to do in Tungnath | Things to do near Tungnath Temple</Text>

      <Text style={styles.subHeading}>Trekking:</Text>
      <Text style={styles.paragraph}>
        Other than Chopta - Tungnath trek, one can cover Tungnath – Chandrashila trek that is 1 km and Deoriatal – Chandrashila Trek that is 2.5 km. During winters, these trekking routes are covered in snow, making the trek moderately hard but giving an extraordinary experience for Adventure Travelers.
      </Text>

      <Text style={styles.subHeading}>Birdwatching:</Text>
      <Text style={styles.paragraph}>
        Birdwatchers can see Himalayan Monal and high-altitude Himalayan birds that will surely give birdwatchers a unique and rare experience.
      </Text>

      <Text style={styles.subHeading}>Nature Photography:</Text>
      <Text style={styles.paragraph}>
        Tungnath Temple is located around 3600m in height, allowing you to capture some panoramic views of the surroundings.
      </Text>
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
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  subHeading: {
    fontSize: 17,
    marginTop: 15,
    fontFamily: 'Raleway-Bold',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default Overview;
