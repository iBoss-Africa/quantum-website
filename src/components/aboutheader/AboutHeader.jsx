import "./aboutheader.css";
import aboutheader from "../../assets/about_header/about_header.svg";

const AboutHeader = () => {
  return (
    <section id="about_header">
      {/* Container for the about header content */}
      <div className="container about_header_container">
        <div className="about_header_content">
          {/* information section */}
          <h2>
            <span className="orange">QUANTUM COMMERCE AND RETAIL SERVICES LIMITED</span> is a global company
            registered in Nigeria to provide technology driven solutions in
            areas that impact quality of life
          </h2>
        </div>

        {/* Header image section */}
        <div className="about_image">
          <img src={aboutheader} alt="AboutImage" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
