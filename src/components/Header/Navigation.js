import React, { useState, useEffect, useCallback } from "react";
import NavCartButton from "./NavCartButton";
import "./Navigation.css";

export default function Navigation() {
  const [isActive, setIsActive] = useState("nav__menu");
  const [isToggler, setIsToggler] = useState("burger");
  const [padding, setPadding] = useState("nav");
  const [logo, setLogo] = useState("logo");
  const [tag, setTag] = useState("tag");
  const [yAxis, setYAxis] = useState(0);

  const handeleScrolling = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (yAxis > window.scrollY) {
        setPadding("nav nav__padding");
        setLogo("logo");
        setTag("tag");
      } else {
        setPadding("nav scroll");
        setLogo("shrink__logo");
        setTag("shrink__tag");
      }

      setYAxis(window.scrollY);
    },
    [yAxis]
  );

  useEffect(() => {
    setYAxis(window.scrollY);
    window.addEventListener("scroll", handeleScrolling);
    return () => {
      window.removeEventListener("scroll", handeleScrolling);
    };
  }, [handeleScrolling]);

  const expandNavBarHandle = () => {
    isActive === "nav__menu"
      ? setIsActive("nav__menu nav-active navLinkFade")
      : setIsActive("nav__menu");
    isToggler === "burger"
      ? setIsToggler("burger toggle")
      : setIsToggler("burger");
  };

  return (
    <nav className={padding}>
      <div>
        <h1 className={logo}>Chop</h1>
        <p className={tag}>Order with us</p>
      </div>
      <ul className={isActive}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <NavCartButton />
      <div className={isToggler} onClick={expandNavBarHandle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
