import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {AnimatedView} from '@components';
import {TAppState} from '@reducers';
import {styles} from './styles';

export const FooterComponent: React.FC = () => {
  const {moreLoading} = useSelector((state: TAppState) => state.posts);

  return (
    <AnimatedView style={styles.footer}>
      {moreLoading && (
        <AnimatedView>
          <ActivityIndicator />
        </AnimatedView>
      )}
    </AnimatedView>
  );
};
