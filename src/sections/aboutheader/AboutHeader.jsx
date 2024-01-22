import "./aboutheader.css";
import aboutheader from "../../assets/about_header/about_header.svg";

const AboutHeader = () => {
  return (
    <section id="about_header">
      {/* Container for the about header content */}
      <div className="container about_header_container">
        <div className="about_header_content">
          {/* information section */}
          <h3>
            <span className="orange">QUANTUM COMMERCE AND RETAIL SERVICES LIMITED</span> is a <br /> global company
            registered in Nigeria to provide technology <br /> driven solutions in
            areas that impact quality of life
          </h3>
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
