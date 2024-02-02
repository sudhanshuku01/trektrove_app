import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import TouristPlace from './TouristPlace';

const TouristPlaces = () => {
  const categories = [
    {
      title: 'Pilgrimage Destinations (Char Dham)',
      places: [
        {
          name: 'Badrinath Temple',
          description: 'Home to Badrinath Temple dedicated to Lord Vishnu.',
        },
        {
          name: 'Kedarnath Temple',
          description:
            'Famous for Kedarnath Temple, one of the twelve Jyotirlingas of Lord Shiva.',
        },
        {
          name: 'Gangotri',
          description: 'Visit Gangotri Temple, the source of the Ganges River.',
        },
        {
          name: 'Yamunotri',
          description:
            'Explore Yamunotri Temple, the origin of the Yamuna River.',
        },
      ],
    },
    {
      title: 'Adventure and Nature',
      places: [
        {
          name: 'Rishikesh',
          description:
            "Known as the 'Yoga Capital of the World.' Hub for river rafting, trekking, and adventure sports.",
        },
        {
          name: 'Haridwar',
          description:
            'Spiritual city on the banks of the Ganges. Famous for the Ganga Aarti.',
        },
        {
          name: 'Auli',
          description:
            'Hill station known for skiing and panoramic views of the Himalayas.',
        },
        {
          name: 'Mussoorie',
          description:
            'Popular hill station with scenic beauty, trekking, and cable car rides.',
        },
      ],
    },
    {
      title: 'Wildlife Sanctuaries and National Parks',
      places: [
        {
          name: 'Jim Corbett National Park',
          description:
            "India's oldest national park, known for tigers and diverse wildlife.",
        },
        {
          name: 'Binsar Wildlife Sanctuary',
          description:"India's oldest national park, known for tigers and diverse wildlife.",
        },
      ],
    },
    {
      title: 'Hill Stations and Scenic Beauty',
      places: [
        {
          name: 'Nainital',
          description: 'Charming hill station with a picturesque lake.',
        },
        {
          name: 'Almora',
          description:
            'Surrounded by pine and oak forests, known for cultural heritage.',
        }
      ],
    },
    {
      title: 'Cultural and Heritage Sites',
      places: [
        {
          name: 'Kausani',
          description:
            'Panoramic views of the Himalayas. Birthplace of the famous poet Sumitranandan Pant.',
        }
      ],
    },
    {
      title: 'Lakes and Waterfalls',
      places: [
        {name: 'Bhimtal', description: 'Picturesque lake surrounded by hills.'},
      ],
    },
    {
      title: 'Offbeat and Unique',
      places: [
        {
          name: 'Lansdowne',
          description: 'Quaint hill station with a tranquil atmosphere.',
        },
      ],
    },
  ];

  console.log('tourist place');

  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <Category key={index} title={category.title}>
          {category.places.map((place, placeIndex) => (
            <TouristPlace
              key={placeIndex}
              name={place.name}
              description={place.description}
            />
          ))}
        </Category>
      ))}
    </ScrollView>
  );
};

interface CategoryProps {
  title: string;
  children: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({title, children}) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <ScrollView horizontal={true} style={styles.categoryItemScrollview}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  categoryContainer: {},
  categoryItemScrollview: {
    marginBottom: 70,
  },
  categoryTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: '#4d6160',
    fontFamily: 'Raleway-Bold',
    paddingHorizontal: 15,
  },
});

export default TouristPlaces;
