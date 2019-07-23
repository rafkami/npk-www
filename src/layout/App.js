import React from "react";
import "../sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <svg>
        <filter
          id="monochrome"
          colorInterpolationFilters="sRGB"
          x="0"
          y="0"
          height="100%"
          width="100%"
        >
          <feColorMatrix
            type="matrix"
            values="0.70 0 0 0 0.3 
                    0.39 0 0 0 0.61  
                    0.35 0 0 0 0.65 
                    0    0 0 1 0"
          />
        </filter>
      </svg>
      <div className="app">
        <header className="header">{<Header />}</header>
        <main className="content">{<Content />}</main>
        <footer className="footer">{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
