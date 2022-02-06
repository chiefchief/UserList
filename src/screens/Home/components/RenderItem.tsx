import React from 'react';
import {Pressable, View} from 'react-native';
import {Image, Text} from '@components';
import {PostItem} from '@reducers/posts/types';
import {Screens} from '@screens';
import {navigationService} from '@services';
import {imageSize, styles} from './styles';

type RenderItemProps = {
  item: PostItem;
};

export const RenderItem: React.FC<RenderItemProps> = ({item}) => {
  const onComponentPress = () => navigationService.navigate(Screens.PostDetails, {id: item.id});
  const onUserPress = () => navigationService.navigate(Screens.Profile, {id: item.owner.id});

  return (
    <Pressable style={styles.itemContainer} onPress={onComponentPress}>
      <View style={styles.itemTop}>
        <Pressable onPress={onUserPress}>
          <Image source={{uri: item.owner.picture}} style={styles.itemImage} />
        </Pressable>
        <Pressable onPress={onUserPress}>
          <Text style={styles.itemName}>{`${item.owner.firstName} ${item.owner.lastName}`}</Text>
        </Pressable>
      </View>
      <Text style={{marginLeft: imageSize + 16}} numberOfLines={2}>
        {item.text}
      </Text>
    </Pressable>
  );
};
