import React from "react";
import "./meetteam.css";
import Card from "../../components/Card/Card";
import Image from "../../assets/meet_the_team/meet_team.svg"

const Meetteam = () => {
  return (
    <section>
      <div className="container meet_container">
        <div className="meet_header">
          <h2>Meet the Team</h2>
        </div>
        <div className="meet_cards">
          <Card className="meet_card">
            <img src={Image} alt="" />
            <h6>Name</h6>
            <p>Title</p>
          </Card>
          <Card className="meet_card">
            <img src={Image} alt="" />
            <h6>Name</h6>
            <p>Title</p>
          </Card>
          <Card className="meet_card">
            <img src={Image} alt="" />
            <h6>Name</h6>
            <p>Title</p>
          </Card>
          <Card className="meet_card">
            <img src={Image} alt="" />
            <h6>Name</h6>
            <p>Title</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Meetteam;
