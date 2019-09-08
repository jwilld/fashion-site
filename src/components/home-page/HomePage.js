import React from "react";
import Nav from "../nav/Nav";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
        <div className = 'top-container'>
      <div className="homepage-title">
        <h2>trnd</h2>
      </div>
      <div className='nav-container'>
        <Nav />
      </div>

        </div>

    </div>
  );
}
export default HomePage;
