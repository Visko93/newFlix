import React from "react";
import { NavLink } from "react-router-dom";

export default function NavButton ({to, children, className}) {
  
  return(

      <button className={className}>
          <NavLink to={to}>{children}</NavLink>
      </button>    

  );
};