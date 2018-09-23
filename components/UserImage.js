import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

const UserImage = () => {
  return (
    <MainImage source={require('../images/Andrea.png')} />
  )
}

const MainImage = styled.Image`
  width: 276px;
  height: 369px;
`

export default UserImage;

