import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import UserImage from './UserImage';
import AppText from './AppText';



const Card = (props) => {
  console.log(props)
  return (
    <CardContainer>
      <UserImage name={props.name} />
      <AppText 
        text={'Emily, 23'} 
        color={'#000'}
        size={'16px'}
      />
      <AppText 
        text={'Friends with Emily Albert'} 
        color={'#aaa'}
        size={'14px'}
      />
    </CardContainer>
  )
}

const CardContainer = styled.View`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 0 10px 10px 10px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
`

export default Card;

