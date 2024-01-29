import React from "react";
import AboutHeader from './../sections/aboutheader/AboutHeader';
import Ourmission from '../sections/ourmission/Ourmission';
import Founder from './../sections/founder/Founder';
import Meetteam from './../sections/meetteam/Meetteam';



const About = () => {
    return (
      <main>
        <AboutHeader />
        <Ourmission />
        <Founder />
        <Meetteam />
      </main>
    );
  };
  
  export default About;