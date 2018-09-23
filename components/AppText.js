import React, { Component } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

 const AppText = (props) => {
   return (
    <UserText 
      color={props.color}
      size={props.size}
    >
      {props.text}
    </UserText>
   )
 }

const UserText = styled.Text`
  font-size: ${props => props.size};
  color: ${props => props.color};
`

export default AppText

