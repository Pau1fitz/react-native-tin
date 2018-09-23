import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components';

const userImages = {
  'Andrea': require('../images/Andrea.png'),
  'Chuck': require('../images/Chuck.jpeg'),
  'Dwayne': require('../images/Dane.jpg')
}

const UserImage = ({ name }) => {

  const userImage = userImages[name]
  return (
    <MainImage source={userImage} />
  )
}

const MainImage = styled.Image`
  width: 100%;
  height: 400px;
`

export default UserImage;

