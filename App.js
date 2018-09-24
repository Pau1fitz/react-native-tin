import React, { Component } from 'react';
import { 
  Text, 
  View,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';
import SwipeCard from './components/SwipeCard';
import BottomMenu from './components/BottomMenu';
import styled from 'styled-components';
import ActionsMenu from './components/ActionsMenu';
import { LinearGradient } from 'expo';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Users = [
  { 'id': 1, 'name': 'Andrea', 'age': 23 },
  { 'id': 2, 'name': 'Chuck', 'age': 31 },
  { 'id': 3, 'name': 'Dwayne', 'age': 28 }
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
              <Text style={{color: 'rgb(56, 202, 120)', borderWidth: 4, borderColor: 'rgb(56,202,120)', padding: 10, fontSize: 34, fontWeight: '800'}}>LIKE</Text>
            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{'rotate': '30deg'}], position: 'absolute', zIndex: 1000, top: 50, right: 40}}>
              <Text style={{color: 'rgb(254,80,104)', borderWidth: 4, borderColor: 'rgb(254,80,104)', padding: 10, fontSize: 34, fontWeight: '800'}}>NOPE</Text>
            </Animated.View>

            <SwipeCard user={user}  />
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
          <SwipeCard 
            user={user} 
          />
        </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <LinearGradient
        colors={['#fff', 'rgb(247,247,247)', 'rgb(244,244,244)']}
        style={{ flex: 1 }}>
        <Container>
          <Header />
            <ActionsMenu />
            <Section>
              {this.renderUsers()}
            </Section>
            <BottomMenu />
          <Footer />
        </Container>
      </LinearGradient>
    );
  }
}

const Container = styled.View`
  flex: 1;
`
const Section = styled.View`
  flex: 1;
  align-items:center;
  display: flex;
`
const Header = styled.View`
  height: 60px;
`
const Footer = styled.View`
  height: 60px;
  border: 1px solid orange;
`