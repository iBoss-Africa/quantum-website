import "./footer.css";
import footerImage from "../../assets/footer/footer_logo.svg";
import twitter from "../../assets/footer/footer_twitter.svg"
import youtube from "../../assets/footer/footer_youtube.svg"
import instagram from "../../assets/footer/footer_instagram.svg"
import facebook from "../../assets/footer/footer_facebook.svg"

const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="footer_container">
        <div className="footer_image_container">
          <img src={footerImage} alt="" />
            <p>
              Call: <span>+234 916 155 4000, +234 916 166 4000</span>
            </p>
            <p>
              {" "}
              Email: <span>info@iboss.com</span>
            </p>
            <p>
              {" "}
              Address:{" "}
              <span>
                173 Ogudu Road After Ogudu City Mall Opposite St Andrews Anglican
                Church Ogudu Lagos
              </span>
            </p>
        </div>

        <div className="quick_links">
          <h5>Quick Links</h5>
          <p>About Us</p>
          <p>Our works</p>
          <p>Blog</p>
        </div>

        <div className="our_services">
          <h5>Our Services</h5>
          <p>Software Development</p>
          <p>Digital Product Design</p>
          <p>Consulting and Management</p>
          <p>Cloud/Devops</p>
          <p>Marketing</p>
        </div>

          <div className="social_media">
            <h5>Follow us on:</h5>
            <div className="socials">
              <img className="footer_social" src={twitter} alt="" />
              <img className="footer_social" src={instagram} alt="" />
              <img className="footer_social" src="" alt="" />
              <img className="footer_social" src={facebook} alt="" />
            </div>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
