import React from "react";
import AboutHeader from './../sections/aboutheader/AboutHeader';
import Ourvision from './../sections/ourvision/Ourvision';
import Founder from './../sections/founder/Founder';
import Meetteam from './../sections/meetteam/Meetteam';



const About = () => {
    return (
      <main>
        <AboutHeader />
        <Ourvision />
        <Founder />
        <Meetteam />
      </main>
    );
  };
  
  export default About;