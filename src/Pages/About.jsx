import React from "react";
import AboutHeader from './../components/aboutheader/AboutHeader';
import Ourmission from './../components/ourmission/Ourmission'
import Founder from './../components/founder/Founder'
import Meetteam from './../components/meetteam/Meetteam'



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