import React, { Component } from 'react';
 // eslint-disable-next-line
import PropTypes from 'prop-types';
import '../../Themes/styles.css';
import {Container} from '../../Themes/grid';
import {HeroImage, RevealP} from './Home.style';
import  WhenInView from '../../components/Wheninview/Wheninview';	
//import logo from './logo.svg';
//import './App.css';




export default class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
       <HeroImage>
        <h1>Shreyash Sharma</h1>
        <h2>Front-end Developer</h2>
       </HeroImage>
       <WhenInView>
       {({isInView}) =>
        <RevealP hide = {!isInView}>Hello, Welcome to my official website, Browse around, you might find something interesting.

        </RevealP>
      }
       </WhenInView>
      </Container>
    );
  }
}

