import React from 'react';

import * as S from './container.styled';

const Container: React.FC<S.Props> = ({direction, children, className}) => {
  return (
    <S.Container direction={direction} className={`container ${className}`}>
      {children}
    </S.Container>
  );
};

export default Container;