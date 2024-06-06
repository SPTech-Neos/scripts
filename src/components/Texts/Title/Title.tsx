import React from 'react';
import * as S from './title.styled';

export const PrimaryTitle: React.FC<S.TitleProps> = ({children, size, theme, outline, lines}) => {
  return (
    <S.PrimaryTitle
      className='primary-title' 
      size={size} 
      theme={theme} 
      outline={outline}
      lines={lines}>
      {children}
    </S.PrimaryTitle>
  );
};

export const SecondaryTitle: React.FC<S.TitleProps> = ({children, size, theme, outline, lines}) => {
  return (
    <S.SecondaryTitle 
      className='secondary-title'
      size={size} 
      theme={theme} 
      outline={outline}
      lines={lines}>
      {children}
    </S.SecondaryTitle>
  );
};