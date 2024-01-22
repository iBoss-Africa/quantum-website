import "./ourvision.css";
import Card from "../../components/Card/Card";

const Ourvision = () => {
  return (
    <section id="our_vision">
      <div className="container our_vision_container">
        <div className="our_vision_content">
          <h2>Our Mission</h2>
        </div>

        <div className="first_mission">
          <div className="mission_text">
            <p>
              To empower businesses & communities through our products. We are
              dedicated to delivering cutting-edge solutions that solve
              real-world challenges and drive growth
            </p>
          </div>
        </div>
      </div>
      <div className="second_mission">
        <div className="vision_text">
          <p>
            We designed Quantum Commerce Retail Services (Q-CRS) to provide
            solutions and improve transaction experience all through the
            commerce value chain. Buy, sell, or facilitate the process in any
            other way -you are part of the Quantum unified, co-located,
            hyper-local, e-commerce universe
          </p>
        </div>
      </div>
      <div className="card_mission">
        <Card>
          <p>
            Think of Quantum CRS as a provider of services that helps you move
            with life, reducing the hassle of commerce to a bunch of simple
            commands, from search to fulfilment
          </p>
        </Card>
        <Card>
          <p>
            Each solution, from the House of Quantum is expressly configured to
            provide comfort and ultimately make life move more easily, more
            profitably and more excitedly for everyone on the journey
          </p>
        </Card>
        <Card>
          <p>
            Technology has reduced the world to a global village; Quantum is
            just ensuring that all corners of the village are within range, of
            your fingertips or a quiet shout
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Ourvision;
