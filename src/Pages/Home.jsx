
import React from "react";
import Header from "./../components/header/Header";
import About from "./../components/about/About";
import Oursolution from "./../components/oursolution/OurSolutions"
import Partners from './../components/Partners/Partners';
import Contact from './../sections/contact/Contact';
import Subscribe from './../components/subscribe/Subscribe';


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