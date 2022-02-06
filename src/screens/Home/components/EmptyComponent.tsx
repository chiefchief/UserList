import React from 'react';
import {useSelector} from 'react-redux';
import {AnimatedView, Text} from '@components';
import {useTranslation} from '@hooks';
import {TAppState} from '@reducers';
import {styles} from './styles';

export const EmptyComponent: React.FC = () => {
  const {t} = useTranslation();
  const {error} = useSelector((state: TAppState) => state.posts);

  return (
    <AnimatedView style={styles.empty}>
      <Text style={styles.emptyTitle}>{t('Currently no data')}</Text>
      <Text style={styles.emptyTitle}>{t('Pull to update')}</Text>
      <Text style={styles.emptyError}>{error}</Text>
    </AnimatedView>
  );
};
