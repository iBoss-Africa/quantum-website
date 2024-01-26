import React from "react";
import "./founder.css";
import FounderImage from "../../assets/founder/founder_image.svg";

const Founder = () => {
  return (
    <section id="founder">
      <div className="container founder_container">
        <div className="founder_img">
          <img src={FounderImage} alt="" />
        </div>
        <div className="founder_text">
          <h2>Founder's Speech</h2>
          <p>
            At our company, we're more than just a technology company; we're
            innovators, problem solvers, and creators. Established in [Year],
            we've been at the forefront of the tech industry, driving progress
            and transforming businesses across the globe.
          </p>
          <br />
          <p>
            Our Mission is Simple: Empowering Excellence Through Technology. Who
            We Are: We are a team of passionate technologists, visionaries, and
            experts dedicated to harnessing the power of technology to create
            solutions that matter.
          </p>
          <br />
          <p>
            With a deep understanding of the digital landscape and a commitment
            to innovation, we thrive on challenges and have a track record of
            turning ideas into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
