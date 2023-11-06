import React from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import "./header.scss";

function Header() {
  return (
    <div>
      <Image src={logo} alt="App logo" />
    </div>
  );
}

export default Header;
