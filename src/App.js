import React from 'react';
import { BrowserRouter as Router  } from "react-router-dom";

import Routes from "./routes";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


import './App.css';

function App() {
  return (
      <Router>
        <Menu />
        <Routes />
        <Footer />
      </Router>
  );
}

export default App;