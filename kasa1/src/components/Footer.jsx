import React from "react";
import logoFooter from "../assets/logo-footer.png";

const Footer = (props) => {
  return (
    //Margin Top de 50px ou 282px  définie dans la page Home
    <div style={{ marginTop: props.marginTop }} className="footer">
      <div className="footer-container">
        <img src={logoFooter} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
