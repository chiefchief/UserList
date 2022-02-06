import {bottom, width} from '@constants';
import {StyleSheet} from 'react-native';

export const imageSize = (width - 64) / 5;

export const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  itemTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  itemImage: {
    width: imageSize,
    aspectRatio: 1,
    marginRight: 16,
    borderRadius: imageSize * 0.4,
  },
  itemName: {
    fontSize: 18,
  },
  empty: {
    padding: 16,
  },
  emptyTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  emptyError: {
    color: 'red',
    marginTop: 16,
    textAlign: 'center',
  },
  footer: {
    height: bottom,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
