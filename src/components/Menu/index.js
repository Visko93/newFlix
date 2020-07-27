import React from "react";

import './index.css'
import ButtonNavLink from "../ButtonLink/ButtonNavLink";

import logo from "../../images/logo.png";

export default function NavButton () {
  
  return(
    <header className="Menu">
      <span className="Logo">
        <a href="/">
          <img src={logo} alt="companie logo" height={60}/>
        </a>
      </span>
      <ButtonNavLink href="/" >
        Novo vídeo
      </ButtonNavLink>
    </header>
  );
};