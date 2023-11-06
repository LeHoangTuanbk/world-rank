import React from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Image
        src={logo}
        alt="App logo"
        className="header__logo-image"
        height={50}
        loading="lazy"
      />
    </div>
  );
}

export default Header;
