import React from 'react';
import * as S from './checkbox.styled';

import Subtitle from '../../Texts/Subtitle/Subtitle';

export const Checkbox: React.FC<S.CheckboxProps> = ({label}) => {
  return (
    <S.Checkbox label={label}>
      <input type='checkbox' />
      <Subtitle>{label}</Subtitle>
    </S.Checkbox>
  );
};
