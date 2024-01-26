
import React from "react";
import Header from "./../sections/header/Header";
import About from "./../sections/about/About";
import Oursolution from "./../sections/oursolution/OurSolutions"
import Partners from './../components/Partners/Partners';
import Contact from './../sections/contact/Contact';
import Subscribe from './../sections/subscribe/Subscribe';


const Home = () => {
    return (
      <main>
        <Header />
        <About />
        <Oursolution />
        <Partners />
        <Contact />
        <Subscribe />
      </main>
    );
  };
  
  export default Home;