import './partners.css'
import Qube  from "../../assets/partners/Qube.svg";
import SmartPos from "../../assets/partners/Smartpos.svg"
import TangoLogo  from "../../assets/partners/TangoLogo.svg";


const Partners = () => {
  return (
    <section id="partners">
      <div className="container partners_container">
        <div><img src={Qube} alt="" /></div>
        <div><img src={TangoLogo} alt="" /></div>
        <div><img src={SmartPos} alt="" /></div>
      </div>
    </section>
  )
}

export default Partners