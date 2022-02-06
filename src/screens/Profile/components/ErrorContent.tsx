import React from 'react';
import {Pressable} from 'react-native';
import {AnimatedView, Text} from '@components';
import {useTranslation} from '@hooks';
import {styles} from './styles';

type ErrorContentProps = {
  error: string;
  update: () => void;
};

export const ErrorContent: React.FC<ErrorContentProps> = ({error, update}) => {
  const {t} = useTranslation();

  return (
    <AnimatedView>
      <Text style={styles.errorText}>{error}</Text>
      <Pressable onPress={update} hitSlop={16} style={styles.updateContainer}>
        <Text style={styles.updateText}>{t('Press to update')}</Text>
      </Pressable>
    </AnimatedView>
  );
};
