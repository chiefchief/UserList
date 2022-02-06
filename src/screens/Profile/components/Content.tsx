import React from 'react';
import {Linking} from 'react-native';
import {AnimatedView, Image, Text, View} from '@components';
import {useTranslation} from '@hooks';
import {FullOwner} from '../types';
import {styles} from './styles';

type ContentProps = {
  loading: boolean;
  owner: FullOwner | null;
};

export const Content: React.FC<ContentProps> = ({loading, owner}) => {
  const {t} = useTranslation();

  const tryOpen = async () => {
    const url = `mailto:${owner?.email}` || '';
    const canOpen = await Linking.canOpenURL(url);
    canOpen && Linking.openURL(url);
  };

  return loading ? (
    <AnimatedView style={styles.image} />
  ) : (
    <>
      <View style={styles.topContent}>
        <Image source={{uri: owner?.picture}} style={styles.image} />
        <View>
          <Text
            numberOfLines={1}
            style={styles.simpleText}
          >{`${owner?.title}. ${owner?.firstName} ${owner?.lastName}`}</Text>
          <Text style={styles.simpleText}>{owner?.gender}</Text>
          <Text style={[styles.simpleText, styles.link]} numberOfLines={1} onPress={tryOpen}>
            {owner?.email}
          </Text>
        </View>
      </View>
      <Text>{t('Street: {{street}}', {street: owner?.location.street})}</Text>
      <Text>{t('City: {{city}}', {city: owner?.location.city})}</Text>
      <Text>{t('State: {{state}}', {state: owner?.location.state})}</Text>
      <Text>{t('Country: {{country}}', {country: owner?.location.country})}</Text>
      <Text>{t('Timezone: {{timezone}}', {timezone: owner?.location.timezone})}</Text>
    </>
  );
};
