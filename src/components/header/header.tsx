"use client";
import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import { BsMoonStars, BsSun } from "react-icons/bs";
import Image from "next/image";
import "./header.scss";

type theme = "light" | "dark";

function Header() {
  const [theme, setTheme] = useState<theme>("light");

  useEffect(() => {
    const theme: theme | null = window.localStorage.getItem("theme") as theme;
    if (theme) {
      setThemeForUI(theme);
    } else {
      const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkTheme.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        setTheme("dark");
      }
    }
  }, []);

  const setThemeForUI = (theme: theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  const changeTheme = () => {
    if (theme === "light") {
      setThemeForUI("dark");
    } else {
      setThemeForUI("light");
    }
  };
  return (
    <div className="header">
      <Image
        src={logo}
        alt="App logo"
        className="header__logo-image"
        height={50}
        loading="lazy"
      />
      <span className="theme" onClick={changeTheme}>
        {theme === "light" ? <BsMoonStars /> : <BsSun />}
      </span>
    </div>
  );
}

export default Header;
