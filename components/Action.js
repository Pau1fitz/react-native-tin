import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Action = ({name, color, size, type}) => {

  if(type === 'fa') {
    return (
      <TouchableHighlight>
        <FontAwesome name={name} size={size} color={color}/>
      </TouchableHighlight>
      )
  } else {
    return (
      <TouchableHighlight>
        <Ionicons name={name} size={size} color={color}/>
      </TouchableHighlight>
    )
  }
}


export default Action;

