import React from "react";
import "./styles.scss";
import Logo from "./../../assets/graphics/logo.png";
const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img className="logo__img" src={Logo} alt="Logo app" />
        </div>
      </div>
    </header>
  );
};

export default Header;
