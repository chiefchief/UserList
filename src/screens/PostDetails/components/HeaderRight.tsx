import React from 'react';
import {ActivityIndicator, Pressable} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {AnimatedView} from '@components';
import {color, styles} from './styles';

type HeaderRightProps = {
  loading: boolean;
  error: string;
  refresh: () => void;
};

export const HeaderRight: React.FC<HeaderRightProps> = ({loading, error, refresh}) => {
  return (
    <AnimatedView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Pressable onPress={refresh}>
          <MaterialIcon name="refresh" color={color} size={24} />
        </Pressable>
      ) : null}
    </AnimatedView>
  );
};
