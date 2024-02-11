import React, {useEffect, useState} from 'react';
import {
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import searchimg from '../images/Others/search.png';
import {PLACES, PLACES_Datatype} from '../Assets/Place';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const Search = () => {
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchText, setSearchText] = useState<string>('');
  const [filteredPlaces, setFilteredPlaces] = useState<PLACES_Datatype[]>([]);
  const [isTextInputActive, setIsTextInputActive] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsTextInputActive(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsTextInputActive(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = PLACES.filter(place =>
      place.name.toLowerCase().includes(text.toLowerCase().trim()),
    );
    setFilteredPlaces(filtered);
  };

  return (
    <View>
      <View style={styles.searchbox}>
        <TextInput
          placeholder="Search your favorite"
          placeholderTextColor="#8c8c8c"
          style={styles.stext}
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity>
        <Image style={styles.simage} source={searchimg} />
        </TouchableOpacity>
      </View>
      <View>
        {(isTextInputActive || searchText.trim().length > 0) && (
          <ScrollView>
            {filteredPlaces.map(item => (
              <TouchableOpacity 
              onPress={()=> navigation.push('Details',{Place:item.name})}
               key={item.name}
                style={styles.itemContainer}
                >
                <Image style={styles.itemImage} source={item.image} />
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(24, 70, 90, 1)',
    width: '80%',
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 2,
    shadowColor: '#0a0a0a',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10,
  },
  stext: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: 'rgba(239, 241, 238, 1)',
    fontFamily:'PlusJakartaSans-Regular', 
  },
  simage: {
    width: 20,
    height: 20,
    tintColor: 'rgba(239, 241, 238, 1)',
  },
  flatList: {
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 35.,
    height: 35,
    borderRadius:10,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    fontFamily:'PlusJakartaSans-Regular', 
  },
});

export default Search;
