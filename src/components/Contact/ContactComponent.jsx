import React from "react";
import "./contact.css";
import VisitIcon from "../../assets/contact/Visit.svg";
import EmailIcon from "../../assets/contact/Email.svg";
import PhoneIcon from "../../assets/contact/Phone.svg";
import ContactImage from "../../assets/contact/rafiki.svg";

const ContactComponent = () => {
  return (
    <section id="our_contact">
      <h2>Contact Us</h2>
      <p className="contact_text">
        If you have any questions, please do not hesitate to send us a message. <br />
        We are always open to your questions, feedback and enquiries.
      </p>
      <div className="container contact_info_container">
        <div className="contact_form_container">
          <img src={ContactImage} alt="Contact" />
          <form action="">
            <div className="form_input">
              <label htmlFor="name">Name<span>*</span></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form_input">
              <label htmlFor="subject">Subject<span>*</span></label>
              <input type="subject" name="subject" id="subject" required />
            </div>
            <div className="form_input">
              <label htmlFor="message">Message<span>*</span></label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <a href="/" className=" contact_btn">
              Get In Contact With Us
            </a>
          </form>
        </div>

        <span className="divider"></span>

        <div className="contact_information_container">
          <ContactInfoItem
            icon={PhoneIcon}
            title="Call"
            details="+234 916 155 4000, +234 916 166 4000"
          />
          <ContactInfoItem
            icon={EmailIcon}
            title="Email"
            details="info@iboss.com"
          />
          <ContactInfoItem
            icon={VisitIcon}
            title="Visit us"
            details={`173 Ogudu Road After Ogudu City Mall Opposite St Andrews Anglican Church Ogudu Lagos`}
          />
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, title, details }) => (
  <div className="contact_info_item">
    <div className="icon_container">
      <img className="contact_info_item_img" src={icon} alt="" />
    </div>
    <div className="contact_info_item_text">
      <h6>{title}</h6>
      <p>{details}</p>
    </div>
  </div>
);

export default ContactComponent;
