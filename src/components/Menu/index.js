import React from "react";
import { NavLink } from "react-router-dom";

import './index.css'
import ButtonNavLink from "../ButtonLink/ButtonNavLink";

import logo from "../../images/logo.png";

export default function Menu () {
  
  return(
    <header className="Menu">
      <span className="Logo">
        <NavLink to="/">
          <img src={logo} alt="company logo" height={50}/>
        </NavLink>
      </span>
      <ButtonNavLink to="/" className="ButtonLink">
        Novo vídeo
      </ButtonNavLink>
    </header>
  );
};