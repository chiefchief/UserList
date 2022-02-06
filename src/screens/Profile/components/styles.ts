import {width} from '@constants';
import {StyleSheet} from 'react-native';

const imageSize = width / 3;

export const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
  updateContainer: {
    marginTop: 16,
  },
  updateText: {
    fontSize: 12,
    color: 'lightblue',
  },
  topContent: {
    flexDirection: 'row',
  },
  image: {
    width: imageSize,
    aspectRatio: 0.75,
    marginRight: 16,
    borderRadius: 16,
  },
  simpleText: {
    fontSize: 14,
    marginTop: 8,
  },
  link: {
    color: 'blue',
  },
});
