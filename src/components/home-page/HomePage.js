import React, {useState} from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import "./HomePage.css";
import TrndDisplay from "../trnd-display/TrndDisplay";

function HomePage() {

  return (
    <div className="home-page">
      <div className="top-container">
        <div className="homepage-title">
          <Link to ='/' className='title-nav-text'>
            <h2>trnd</h2>
          </Link>
        </div>
        <div className="nav-container">
          <Nav />
        </div>
      </div>
      <div className="trnd-container">
        <TrndDisplay />
      </div>
    </div>
  );
}
export default HomePage;
