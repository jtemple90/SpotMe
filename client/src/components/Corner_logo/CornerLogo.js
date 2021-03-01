import React from "react";
import Logo from "../../images/logo.png";
import "./CornerLogo.css";

const CornerLogo = () => {
  return (
    <div>
      <img className="corner__logo" src={Logo} alt="" />
    </div>
  );
};

export default CornerLogo;
