import React from 'react';

import * as S from './subtitle.styled';

const Subtitle: React.FC<S.SubtitleProps> = ({ children, size, theme, weight, display = true }) => (
  display ? (
    <S.PrimarySubtitle 
      size={size} 
      theme={theme} 
      weight={weight}
      className='subtitle'
    >
      {children}
    </S.PrimarySubtitle>
  ) : null
);

export default Subtitle;
