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
  { 'id': 1, 'uri': require('./images/Andrea.png') },
  { 'id': 2, 'uri': require('./images/Chuck.jpeg') },
  { 'id': 3, 'uri': require('./images/Dane.jpg') }
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
    return Users.map(user => {
      return (
        <Animated.View
          {...this.PanResponder.panHandlers}
          key={user.id}
          style={[
            { transform: this.position.getTranslateTransform()},
            {
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: 'absolute'
            }
          ]}
        >
          <Image 
            source={ user.uri } 
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
          />
        </Animated.View>
      )
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
