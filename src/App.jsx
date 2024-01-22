import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
// import Services from "./sections/services/Services";
import OurSolutions from "./sections/oursolution/OurSolutions";
// import Ourprocess from "./sections/ourprocess/Ourprocess";
// import Faqs from "./sections/faqs/Faqs";
import Contact from "./sections/contact/Contact";
import Footer from './sections/footer/Footer';
import AboutHeader from './sections/aboutheader/AboutHeader';
import Ourvision from "./sections/ourvision/Ourvision";
import Partners from "./components/Partners/Partners";
import Subscribe from "./sections/subscribe/Subscribe";
// import Wework from "./sections/wework/Wework";


const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <OurSolutions />
      <Partners />
      <Contact />
      <Subscribe/>
      <Footer />
      <AboutHeader/>
      <Ourvision />
      {/* <Services />
      <Ourprocess />
      <Faqs />
      <Wework/>
      
       */}
    </main>
  );
};

export default App;
