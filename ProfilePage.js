import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import ActionsMenu from './components/ActionsMenu';

export default ProfilePage = () => (
  <Container>
    <Header />
      <ActionsMenu />
      <Section>
        <UsersImage source={require('./images/Andrea.png')} />

        <SingleView>
          <FontAwesome name={'pencil'} size={22} color={'#fff'}/>
        </SingleView>
        
        <UserName>Andrea</UserName>
      </Section>
    <Footer />
  </Container>
)

const Container = styled.View`
  flex: 1;
`
const Section = styled.View`
  flex: 1;
  align-items:center;
  display: flex;
`
const UsersImage = styled.Image`
  margin-top: 30px;
  border-radius: 130px;
  height: 260px;
  width: 260px;
`
const UserName = styled.Text`
  font-size: 28px;
`
const SingleView = styled.View`
  background: rgb(253,44,122);
  height: 44px;
  width: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  left: 5px;
  z-index: 2;
  top: -20px;
`
const Header = styled.View`
  height: 60px;
`
const Footer = styled.View`
  height: 30px;
  border: 1px solid orange;
`