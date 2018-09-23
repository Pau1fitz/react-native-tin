import React, { Component } from 'react';
import { 
  Text, 
  View,
  Dimensions,
  PanResponder,
  Animated,
  Image
} from 'react-native';
import Card from './components/Card';
import styled from 'styled-components';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const Users = [
  { 'id': 1, 'name': 'andrea'},
  { 'id': 2, 'name': 'chuck'},
  { 'id': 3, 'name': 'dane'}
]
 
export default class App extends Component {
  
  constructor() {
    super()
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy})
      },
      onPanResponderRelease: (evt, gestureState) => {

      }
    })
  }

  renderUsers = () => {
    return Users.map((user, i) => {

      if( i < this.state.currentIndex) {
        return null
      } else if(i === this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={user.id}
            style={[
              { transform: this.position.getTranslateTransform()},
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH - 20,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Card name={user.name} />
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={user.id}
            style={[
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH - 20,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
          <Card name={user.name} />
        </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <Container>
        <Header />
        {this.renderUsers()}
        <Footer />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Header = styled.View`
  height: 60px;
`

const Footer = styled.View`
  height: 60px;
`
