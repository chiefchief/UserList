import React, {useCallback, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {TAppState} from '@reducers';
import {getPosts} from '@reducers/posts/posts';
import {PostItem} from '@reducers/posts/types';
import {EmptyComponent} from './components/EmptyComponent';
import {RenderItem} from './components/RenderItem';
import {FooterComponent} from './components/FooterComponent';

export const Home: React.FC = () => {
  const {postsData, loading} = useSelector((state: TAppState) => state.posts);
  const dispatch = useDispatch();

  const updatePosts = useCallback(() => dispatch(getPosts()), [dispatch]);

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  const keyExtractor = (item: PostItem) => item.id;
  const renderItem = ({item}: {item: PostItem}) => <RenderItem item={item} />;
  const loadMore = () => dispatch(getPosts(true));

  return (
    <FlatList
      style={styles.container}
      initialNumToRender={10}
      data={postsData}
      ListEmptyComponent={EmptyComponent}
      ListFooterComponent={FooterComponent}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={updatePosts} />}
      onEndReachedThreshold={0.4}
      onEndReached={loadMore}
    />
  );
};
