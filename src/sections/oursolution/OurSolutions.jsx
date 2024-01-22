import "./oursolutions.css";
import Tango from "../../assets/our_solutions/Tango.svg";
import SmartPos from "../../assets/our_solutions/smartpos.svg";

const Ourworks = () => {
  return (
    <section id="ourSolutions">
      <h2>Our Solutions</h2>
      <div className="container oursolutions_container">
        <div className="top">
          <div className="top_left">
            <img src={Tango} alt="" />
          </div>
          <div className="top_right">
            <h2>Tango</h2>
            <p>
              Logistics companies are essential for businesses in various
              industries, from e-commerce and manufacturing to retail and
              healthcare, as they ensure that products reach their destinations
              in a timely and cost-effective manner.
            </p>
            <a href="/" className="btn primary">
              Learn More
            </a>
          </div>
        </div>
        <div className="bot">
          <div className="bot_left">
            <h2>Smart Pos</h2>
            <p>
              We redefine transaction experiences with our state-of-the-art
              Point of Sale solutions. With a commitment to innovation, we
              empower businesses to thrive by providing seamless, secure, and
              efficient payment processing.
            </p>
            <a href="/" className="btn primary">
              Coming Soon
            </a>
          </div>
          <div className="bot_right">
            <img src={SmartPos} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourworks;
