import "./oursolutions.css";
import Tango from "../../assets/our_solutions/Tango.svg";
import SmartPos from "../../assets/our_solutions/smartpos.svg";
import React,{ useEffect, useState } from "react";

const Ourworks = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://iboss-webapi.onrender.com/v1/api/our-work?website=quantum"
        );
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error("Failed to fetch projects:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <section id="ourSolutions">
      <h2>Our Solutions</h2>
      <div className="container oursolutions_container">
        <div className="top">
          <div className="top_left">
            <img src={Tango} alt="" />
          </div>
          <div className="top_right">
            <h2>{projects[0]?.title}</h2>
            <p>
              {projects[0]?.description}
            </p>
            <a href="/" className="btn primary">
              Learn More
            </a>
          </div>
        </div>
        <div className="bot">
          <div className="bot_left">
            <h2>{projects[1]?.title}</h2>
            <p>
              {projects[1]?.description}
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
