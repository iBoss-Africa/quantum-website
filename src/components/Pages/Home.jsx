import Header from "./sections/header/Header";
import About from "./sections/about/About";
import OurSolutions from "./sections/oursolution/OurSolutions";
import Contact from "./sections/contact/Contact";
import Partners from "./components/Partners/Partners";
import Subscribe from "./sections/subscribe/Subscribe";


const App = () => {
    return (
        <main>
            <Header />
            <About />
            <OurSolutions />
            <Partners />
            <Contact />
            <Subscribe />
        </main>
    );
};

export default App;
