import React from "react";

export default function NavButton ({href, children,}) {
  
  return(

      <button className="ButtonLink">
        <a href={href}>{children}</a>
      </button>    

  );
};