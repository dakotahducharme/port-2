import React, { Component } from 'react';
import styled from "styled-components";
const profilePic = require ("./profilepic.jpg");

class Body extends Component {
  render(){
    return(
      <div>
        <p>Hi, I'm Dakotah Ducharme.</p>
        <p>I'm a full stack developer speicalizing in React.js and Ruby on Rails.</p>
        <div>
          {/* <img src={profilePic} alt="me lol" id="pp"></img> */}
        </div>
        {/* <p>While I am a full stack developer, working on  the front end is what I'm really passionate about. I love being able to execute a flawless design and brainstorm creative ideas with a team.</p> */}
      </div>
    )
  }
}

export default Body;