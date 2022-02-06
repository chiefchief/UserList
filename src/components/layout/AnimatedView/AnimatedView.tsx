import React from 'react';
import {Platform, ViewProps} from 'react-native';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';
import {styles} from './styles';

const delay = Platform.OS === 'ios' ? 250 : 100;

export const AnimatedView: React.FC<ViewProps> = ({style, ...otherProps}) => {
  return (
    <Animated.View
      style={[styles.container, style]}
      entering={FadeIn}
      exiting={FadeOut}
      layout={Layout.delay(delay)}
      {...otherProps}
    />
  );
};
