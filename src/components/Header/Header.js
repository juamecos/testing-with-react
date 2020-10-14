import React from "react";
import "./styles.scss";
import Logo from "./../../assets/graphics/logo.png";
const Header = () => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img
            className="logo__img"
            data-test="logoIMG"
            src={Logo}
            alt="Logo app"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
