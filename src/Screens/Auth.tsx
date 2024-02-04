import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  Profile: undefined;
  Notification: undefined;
  Guest:undefined
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import Profile from '../Auth/Profile';
import Notification from '../Auth/Notification';
import Guest from '../Auth/Guest';

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Signup">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
      name='Guest'
      component={Guest}
      options={{
        headerShown:false
      }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
