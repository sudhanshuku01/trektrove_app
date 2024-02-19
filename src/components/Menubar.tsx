import React from 'react';
import {
  ImageProps,
  TouchableHighlight,
  StyleSheet,
  Image,
  Text,
  View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import heart from '../images/Others/heart1.png';
import home from '../images/Others/home.png';
import explore from '../images/Others/direction.png';
import user from '../images/Others/user.png';
import LinearGradient from 'react-native-linear-gradient';

type MenubarProps = {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
};

type screen="Home" | "Explore" | "Liked" | "Auth";

type MenuItem = {
  screen: screen;
  image: ImageProps;
};

const DATA:MenuItem[] = [
  {
    screen: 'Home',
    image: home,
  },
  {
    screen: 'Explore',
    image: explore,
  },
  {
    screen: 'Auth',
    image: user,
  },
  {
    screen: 'Liked',
    image: heart,
  },
];

const Menubar: React.FC<MenubarProps> = ({ activeScreen, setActiveScreen }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <LinearGradient
    colors={["#00b89f","#00b89f"]} 
         start={{ x: 1, y: 0 }}
         end={{ x: 0, y: 1}}
     style={styles.menubar}>

      {DATA.map((data, index) => (
        <TouchableHighlight
          underlayColor={"#231f20"}
          onPress={() => {
            setActiveScreen(data.screen);
             navigation.navigate(data.screen);
          }}
          key={index}
          style={[
            activeScreen === data.screen && styles.activemenu,
            styles.menubar_img_view,
          ]}
        >
          <Image
            style={[
              activeScreen === data.screen ? { tintColor: '#eff1ee' }:{tintColor:"#eff1ee"},
              styles.menubar_img,
            ]}
            source={data.image}
          />
        </TouchableHighlight>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menubar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  menubar_img_view: {
    padding: 8,
    borderRadius: 25,
  },
  menubar_img: {
    width: 27,
    height: 27,
  },
  activemenu: {
    backgroundColor: '#231f20',
    transform: [{ translateY: -20 }],
  },
});

export default Menubar;




// may help
//   navigate("Content" as never, {} as never);
