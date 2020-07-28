import React from "react";

import backImage from '../../images/logo.png'
import './index.css'

export default function ErrorPage () {

  return (
    <div className="container">
      <span className="backImage">
        <img src={backImage} width="800" height="600" alt="background"/>
      </span>
      <h1>Page not Found</h1>
      <p>The requested page doesn't exist, redirect to the main<a href="/"> Page</a></p>
    </div>
  );
}