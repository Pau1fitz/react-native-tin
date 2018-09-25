import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import SwipePage from './SwipePage';
import ProfilePage from './ProfilePage';

import { NativeRouter, Route } from 'react-router-native'

export default App = () => (
  <NativeRouter>
    <Container>
      <Route exact path='/profile' component={SwipePage}/>
      <Route exact path='/' component={ProfilePage}/>
    </Container>
  </NativeRouter>
)

const Container = styled.View`
  flex: 1;
`