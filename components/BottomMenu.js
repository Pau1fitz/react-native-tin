import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Button from './Button.js';

const BottomMenu = () => {

  return (
    <BottomMenuContainer>
      <Button size={28} color={'rgb(255,200,1)'} name='undo' />
      <Button size={32} color={'rgb(253,44,122)'} name='close' buttonType={'large'} />
      <Button size={26} color={'rgb(128,73,199)'} name='bolt' />
      <Button size={32} color={'rgb(20,226,154)'} name='heart' buttonType={'large'} />
      <Button size={28} color={'rgb(22,154,228)'} name='star' />
    </BottomMenuContainer>
  )
}

const BottomMenuContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export default BottomMenu;

