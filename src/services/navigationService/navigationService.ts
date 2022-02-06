import {createNavigationContainerRef, NavigatorScreenParams} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef<Root>();

const navigate = (name: keyof Root, params: Root[keyof Root]) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

type RootStackParamList = {
  'Home Stack': NavigatorScreenParams<HomeStackParamList>;
  Profile: {id: string};
};

type HomeStackParamList = {
  Home: undefined;
  'Post Details': {id: string};
};

interface Root extends RootStackParamList, HomeStackParamList {}

export const navigationService = {
  navigationRef,
  navigate,
  goBack,
};
export type {RootStackParamList, HomeStackParamList};
