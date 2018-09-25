import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link } from 'react-router-native'

const Action = ({name, color, size, type, linkTo}) => {

  if(type === 'fa') {
    return (
      <Link to={linkTo}>
        <FontAwesome name={name} size={size} color={color}/>
      </Link>
    )
  } else {
    return (
      <Link to={linkTo}>
        <Ionicons name={name} size={size} color={color}/>
      </Link>
    )
  }
}


export default Action;

