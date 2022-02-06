import React from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {View, Text} from '@components';
import {useHeaderHeight, useRoute, useCallback, useEffect, useState} from '@hooks';
import {Urls} from '@constants';
import {HomeStackParamList, httpService} from '@services';
import {styles} from './styles';
import {FullPost} from './types';
import {HeaderRight} from './components/HeaderRight';
import {Content} from './components/Content';

export const PostDetails: React.FC = () => {
  const headerHeight = useHeaderHeight();
  const {setOptions} = useNavigation();
  const {params} = useRoute<RouteProp<HomeStackParamList, 'Post Details'>>();
  const [post, setPost] = useState<FullPost | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getPost = useCallback(async () => {
    if (params.id) {
      setError('');
      setLoading(true);
      try {
        const {data} = await httpService.get<FullPost>(`${Urls.posts}/${params.id}`);
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, [params]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  useEffect(() => {
    setOptions({
      headerRight: () => <HeaderRight loading={loading} error={error} refresh={getPost} />,
    });
  }, [error, getPost, loading, setOptions]);

  return (
    <View style={[styles.container, {marginTop: headerHeight}]}>
      {error ? <Text style={styles.errorText}>{error}</Text> : <Content loading={loading} post={post} />}
    </View>
  );
};
