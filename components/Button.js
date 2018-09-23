import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({name, color, size, buttonType}) => {

  return buttonType === 'large' ?
   (
    <LargeButtonContainer>
      <TouchableHighlight>
        <FontAwesome name={name} size={size} color={color}/>
      </TouchableHighlight>
    </LargeButtonContainer>
  ) : (
    <SmallButtonContainer>
      <TouchableHighlight>
        <FontAwesome name={name} size={size} color={color}/>
      </TouchableHighlight>
    </SmallButtonContainer>
  )
}

const LargeButtonContainer = styled.View`
  background: #fff;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SmallButtonContainer = styled.View`
  background: #fff;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Button;

