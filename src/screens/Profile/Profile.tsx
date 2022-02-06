import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {View} from '@components';
import {Urls} from '@constants';
import {useRoute, useCallback, useEffect, useState} from '@hooks';
import {httpService, RootStackParamList} from '@services';
import {styles} from './styles';
import {FullOwner} from './types';
import {Content} from './components/Content';
import {ErrorContent} from './components/ErrorContent';

export const Profile: React.FC = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'Profile'>>();
  const [owner, setOwner] = useState<FullOwner | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getOwner = useCallback(async () => {
    if (params.id) {
      setError('');
      setLoading(true);
      try {
        const {data} = await httpService.get<FullOwner>(`${Urls.user}/${params.id}`);
        setOwner(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, [params]);

  useEffect(() => {
    getOwner();
  }, [getOwner]);

  return (
    <View style={styles.container}>
      {error ? <ErrorContent error={error} update={getOwner} /> : <Content loading={loading} owner={owner} />}
    </View>
  );
};
