import {width} from '@constants';
import {StyleSheet} from 'react-native';

export const color = '#2E7DF6';

const imageSize = width / 3;

export const styles = StyleSheet.create({
  container: {
    width: 24,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  image: {
    width: imageSize,
    aspectRatio: 1,
    borderRadius: imageSize * 0.4,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  name: {
    marginTop: 16,
    alignSelf: 'center',
  },
  body: {
    marginTop: 24,
    fontSize: 14,
  },
});
