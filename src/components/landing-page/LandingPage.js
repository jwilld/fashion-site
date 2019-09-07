import React, { useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [nothing, setNothing] = useState("nothing");
  return (
    <div className="landing-container">
      <div className="website-title">
        <h1 >trnd</h1>
      </div>
    </div>
  );
}

export default LandingPage;
