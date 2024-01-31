import './navbar.css'
import Logo from '../../assets/navbar/logo.svg';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {

   // Get the current pathname and hash from the location object
   const { pathname, hash } = useLocation();

   // Scroll to top whenever the pathname changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
 
   // Function to check if a link should be active based on the current hash
   const isActive = (hashValue) => {
     return hash === hashValue;
   };
 

  return (
    <nav>

      {/* Container for the navigation elements */}
      <div className=" nav_container">

      <HashLink smooth to="/#top" className="nav_logo">
          <img src={Logo} alt="" />
      </HashLink>
        {/* Navigation menu section */}
        <ul className="nav_menu">
          <li className="nav_menu_item">
            <HashLink
              smooth
              to="/#top"
              className={isActive("#top") ? "active" : ""}
            >
              Home
            </HashLink>
          </li>
          <li className="nav_menu_item">
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav_menu_item">
            <HashLink
              smooth
              to="/#ourSolutions"
              className={isActive("#ourSolutions") ? "active" : ""}
            >
              Our Solutions
            </HashLink>
          </li>
          <li className="nav_menu_item">
            <HashLink
              smooth
              to="/"
              className={isActive("#services") ? "active" : ""}
            >
              Blog
            </HashLink>
          </li>
        </ul>
        {/* Nav icon button */}
        <a href="#our_contact" id='nav_btn' className='btn primary'>Contact Us</a>
      </div>

    </nav>
  )
}

export default Navbar