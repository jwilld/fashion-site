import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import LoginForm from "../acccess-forms/Login"
import RegisterForm from "../acccess-forms/Register"
import { connect } from 'react-redux';

class LandingPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="landing-container">
        <div className="website-title">
          <Link to = 'homes'className='website-title-text'>
            <h1>trnd</h1>
          </Link>
        </div>
        {this.props.data.isRegistered === false ?
          null
          :
          <div className='login-container'>
            <LoginForm />
          </div>

        }
        <RegisterForm />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(LandingPage);
