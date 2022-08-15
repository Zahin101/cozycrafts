import React from "react";
import playStore from "../../../images/playstore.png";
import AppStore from "../../../images/Appstore.png"
import "./Footer.css"

const Footer = () => {
  return(
    <footer id="footer">
        <div className="leftfooter">
            <h4>Download Our App</h4>
            <p>Download App for Android and IOS</p>
            <img src={playStore} alt="" />
            <img src={AppStore} alt="" />
        </div> 
        <div className="midfooter">
        <h1>Cozy Crafts</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; ZahinRydha</p>
        </div>
        <div className="rightfooter">
            <h4>Follow Us</h4>
            <a href=" ">Instagram</a>
            <a href=" ">Youtube</a>
            <a href=" ">Facebook</a>
        </div>
    </footer>
  );
};

export default Footer;
