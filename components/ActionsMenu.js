import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import Action from './Action';

const ActionsMenu = () => (
  <ActionsMenuContainer>
    <View>  
      <Action linkTo={'/profile'} size={32} color={'rgb(218,223,230)'} name='user' type={'fa'} />
    </View>
    <MiddleView>
      <SingleView>
        <Action linkTo={'/'} size={26} color={'#fff'} name='md-flame' type={'ioc'} />
      </SingleView>
      <GroupsView>
        <Action size={20} color={'rgb(218,223,230)'} name='users' type={'fa'} margin={true} />
      </GroupsView>
    </MiddleView>
    <View>
      <Action size={32} color={'rgb(218,223,230)'} name='ios-chatbubbles' type={'ioc'} />
    </View>
  </ActionsMenuContainer>
)

const ActionsMenuContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const MiddleView = styled.View`
  flex-direction: row;
`
const SingleView = styled.View`
  background: rgb(253,44,122);
  height: 40px;
  width: 75px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  left: 5px;
  z-index: 2;
`
const GroupsView = styled.View`
  border: 3px solid #eee;
  height: 40px;
  width: 90px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  right: 20px;
  padding-left: 15px;
`
export default ActionsMenu;