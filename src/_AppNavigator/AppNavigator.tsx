import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Screens,
  Home,
  PostDetails,
  Profile,
  // ADD NEW SCREEN
} from '@screens';
import {HomeStackParamList, navigationService, RootStackParamList} from '@services';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Screens.Home} component={Home} />
      <HomeStack.Screen
        name={Screens.PostDetails}
        component={PostDetails}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          headerBackTitleVisible: false,
          headerTransparent: true,
          title: '',
        }}
      />
    </HomeStack.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name={Screens.HomeStack} component={HomeNavigator} options={{headerShown: false}} />
        <RootStack.Screen name={Screens.Profile} component={Profile} options={{headerBackTitleVisible: false}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
