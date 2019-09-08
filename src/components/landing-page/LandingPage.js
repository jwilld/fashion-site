import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="website-title">
        <Link className='website-title-text' to='/home'>
          <h1>trnd</h1>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
