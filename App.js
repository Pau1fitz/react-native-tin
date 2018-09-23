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

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0.9, 1],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy})
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy}
          }).start(() => {
            this.setState({
              currentIndex: this.state.currentIndex + 1
            }, () => {
              this.position.setValue({ x: 0, y: 0})
            })
          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy}
          }).start(() => {
            this.setState({
              currentIndex: this.state.currentIndex + 1
            }, () => {
              this.position.setValue({ x: 0, y: 0})
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {
    return Users.map((user, i) => {

      if (i < this.state.currentIndex) {
        return null
      } else if (i === this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={user.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH - 20,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{'rotate': '-30deg'}], position: 'absolute', zIndex: 1000, top: 50, left: 40}}>
              <Text style={{color: 'green', borderWidth: 1, borderColor: 'green', padding: 10, fontSize: 32, fontWeight: '800'}}>LIKE</Text>
            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{'rotate': '30deg'}], position: 'absolute', zIndex: 1000, top: 50, right: 40}}>
              <Text style={{color: 'red', borderWidth: 1, borderColor: 'red', padding: 10, fontSize: 32, fontWeight: '800'}}>NOPE</Text>
            </Animated.View>

            <Card name={user.name} />
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={user.id}
            style={[
              {
                transform: [{scale: this.nextCardScale}],
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
