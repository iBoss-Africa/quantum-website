import "./header.css";
import HeaderImage from "../../assets/header/banner-image.svg";

/**
 * Header component represents the top section of a webpage, typically containing a profile image,
 * a brief introduction, call-to-action buttons, and social media links.
 * @returns {JSX.Element} The JSX representation of the Header component.
 */

const Header = () => {
  return (
    <header id="header">
      {/* Container for the header content */}
      <div className="container header_container">
        <div className="header_content">
          {/* information section */}
          <h1>
            Elevating Businesses
            through <span className="innovative"><i>Innovative</i></span> <br />
            Solutions
          </h1>

          <p>
            Discover the future of business excellence with our innovations, unlocking potential,
            and inspiring growth
          </p>

          {/* Call-to-action buttons section */}
          {/* <div className="header_cta">
            <a href="#contact" className="btn primary header-btn">
              Contact Us
            </a>
          </div> */}
        </div>

        {/* Header image section */}
        <div className="header_profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
      </div>
    </header>
  );
};

export default Header;
