import React, { Component } from 'react';
import {Container,Flex} from '../../Themes/grid'
import {Title, VideoContainer} from './AboutMe.styles';
import ReactPlayer from 'react-player';
import {H1,H2,P} from '../../Themes/types';
class AboutMe extends Component {
  render() {
    return (
      <Container>
       <Title>About Me</Title>
       <H2 align="right">I am a Tech Enthusiast and an avid learner.</H2>
       <Flex>
          <P>I am a computer science graduate from Manipal Institute of technology, Manipal. 
           I am working my hands on front end development and am a keen machine learning enthusiast. 
           Some Of my hobbies include playing football and reading books, listening to songs, watching movies etc.
           <br/>
           <br/>
           I wanted to potray something presentable in order to potray my love for the game.
           <br/> 
           The Following video is one of those that describes the beutiful game....</P>
           <VideoContainer>
           <ReactPlayer
            width="100%"
            controls
           url = "https://www.youtube.com/watch?v=tb5oWeNRkNw&ab_channel=NinoProductions"/> 
           </VideoContainer>
       </Flex>
       <H1>Some other Cool Stuffs!</H1>
       <Flex>
       
           <ReactPlayer
            width="90%"
            controls
           url = "https://www.youtube.com/watch?v=zX0AV6yxyrQ"/> 
       
       
           <ReactPlayer
            width="90%"
            controls
           url = "https://www.youtube.com/watch?v=Heqn2cy5emI&ab_channel=%23MindWarehouse"/> 
       
           <ReactPlayer
            width="90%"
            controls
           url = "https://www.youtube.com/watch?v=0FMfsT11pdA"/> 
       
      </Flex>  
      </Container>
    );
  }
}

export default AboutMe;
