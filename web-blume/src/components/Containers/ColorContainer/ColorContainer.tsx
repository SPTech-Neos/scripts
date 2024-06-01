// TO REDO
import React from 'react';

import * as S from './colorContainer.styled';

const ColorContainer: React.FC<S.ColorContainerProps> = ({ bgColor, children }) => {
  return (
    <S.ColorContainer bgColor={bgColor}>
      {children}
    </S.ColorContainer>
  );
};

export default ColorContainer;