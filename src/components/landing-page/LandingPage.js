import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import LoginForm from "../acccess-forms/Login"

function LandingPage() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [homeAccess,setHomeAccess] = useState('')

  const goToHome = (() =>{
    setLoggedIn(!loggedIn)
    setHomeAccess('/home')
  });
  return (
    <div className="landing-container">
      <div className="website-title">
        <Link className='website-title-text' to={homeAccess} onClick={goToHome} >
          <h1>trnd</h1>
        </Link>
      </div>
      {loggedIn === false ?
        <div className= 'login-container'>
          <LoginForm/>
        </div>
        :
        null
      }
    </div>
  );
}

export default LandingPage;
