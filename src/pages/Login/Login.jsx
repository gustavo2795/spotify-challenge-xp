import React from 'react';
import Logo from '../../assets/logo.png'

import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { ImageContainer, Container } from './styles';

const Login = () => {
  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <Text fontAlign="left" fontSize="18px" fontColor={Colors.secondary}>
       Login
      </Text>
      <button>Autenticar</button>
    </Container>
    
    </>
  )
};

export default Login;