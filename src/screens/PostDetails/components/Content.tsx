import React from 'react';
import {AnimatedView, Image, Text} from '@components';
import {FullPost} from '../types';
import {styles} from './styles';

type ContentProps = {
  loading: boolean;
  post: FullPost | null;
};
export const Content: React.FC<ContentProps> = ({loading, post}) => {
  return loading ? (
    <AnimatedView style={styles.image} />
  ) : (
    <>
      <Image source={{uri: post?.owner.picture}} style={styles.image} />
      <Text style={styles.name}>{`${post?.owner.firstName} ${post?.owner.lastName}`}</Text>
      <Text style={styles.body}>{post?.text}</Text>
    </>
  );
};
