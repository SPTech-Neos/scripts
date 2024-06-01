import React from 'react';

import * as S from './feed.styled';
import CardPromocional from '../../components/Cards/CardPromocional/CardPromocional';


const Feed: React.FC = () => {

  return (
    <S.Feed id="feed">
        <CardPromocional />
    </S.Feed>
  );
};

export default Feed;