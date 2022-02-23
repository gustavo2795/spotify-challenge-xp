import React from 'react';
import Logo from '../../assets/logo.png'

import { ImageContainer } from './styles';

const Header = () => {
  return (
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
  )
};

export default Header;