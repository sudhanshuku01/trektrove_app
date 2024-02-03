import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './Context/Authcontext';
import {NetworkProvider} from './Context/NetworkProvider';

export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Details: {Place: string};
  Auth: undefined;
  Liked: undefined;
  NitUkDetail: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

import Explore from './Screens/Explore';
import Details from './Screens/Details';
import Liked from './Screens/Liked';
import Home from './Screens/Home';
import NitukDetailsPage from './NitUttarakhand/NitukDetailsPage';
import AuthNavigator from './Screens/Auth';
import Menubar from './components/Menubar';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Home');

  return (
    <AuthProvider>
      <NetworkProvider>
        <NavigationContainer
          onStateChange={state => {
            if (state) {
              const index = state.index;
              const activeRoute = state?.routes[index];
              const activeScreenName = activeRoute.name;
              setActiveScreen(activeScreenName);
            }
          }}>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Details"
              component={Details}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Explore"
              component={Explore}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Liked"
              component={Liked}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="NitUkDetail"
              component={NitukDetailsPage}
              options={{
                headerShown: false,
              }}
            /> 
          </RootStack.Navigator>
          <Menubar
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
          />
        </NavigationContainer>
      </NetworkProvider>
    </AuthProvider>
  );
};

export default App;
