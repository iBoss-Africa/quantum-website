import "./about.css";
import Aboutimage from "../../assets/about/about_image.svg";

/**
 * About component represents a section of a webpage providing information about the creator.
 * It includes a portrait image, a brief introduction, a set of informational cards, and a download link for the resume.
 * @returns {JSX.Element} The JSX representation of the About component.
 */

const About = () => {
  return (
    <section id="about">
      {/* Container for the about section content */}
      <div className="container about_container">
        {/* Left side of the about section */}
        <div className="about_left">
          <div className="about_portrait" >
            <img src={Aboutimage} alt="" />
          </div>
        </div>

        {/* Right side of the about section */}
        <div className="about_right">
          <h2>About Us</h2>
          {/* Introduction paragraphs */}
          <p>
            QUANTUM COMMERCE AND RETAIL SERVICES LIMITED is a global company
            registered in Nigeria to provide technology-driven solutions in areas that
            impact quality of life.
          </p>

          <p>
          We are a House of Brands, each carefully developed to link with the other,
leveraging capabilities to unify hitherto dispersed services in commerce .
          </p>
          {/* Read More button */}
          <a href="/" className="btn primary">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
