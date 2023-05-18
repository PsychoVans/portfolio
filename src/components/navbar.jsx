import React, { useEffect, useState } from "react";
import "./../scss/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <ul>
            <li>
              <a href="/">Start</a>
            </li>
            <li>
              <a href="/about">O co chodzi?</a>
            </li>
            <li>
              <a href="/us">O nas</a>
            </li>
            <li>
              <a href="/fundation">Fundacja i organizacje</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
