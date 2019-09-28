import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import LoginForm from "../acccess-forms/Login"
import { connect } from 'react-redux';
import RegisterForm from "../acccess-forms/Register"
import { sign_up, login, showAccess } from '../../actions/actions'



class LandingPage extends Component {

  showAccessForms = () => {
    this.props.dispatch(showAccess())
  }

  showLogin = () => {
    this.props.dispatch(login())
  }
  showSignUp = () => {
    this.props.dispatch(sign_up())
  }

  render() {
    return (
      <div className="landing-container">
        <div className="website-background">

          <div className='trnd-title'>
            <div>
              <span>trnd</span>
            </div>
          </div>

          <div className='trnd-description'>
            <div>
              <p>TRND is a fashion swebsite that catches the latest fashion from picked contritubtors.</p>
            </div>
          </div>
          <div className='join-ad'>
            <p> Contact us to be a contributor.</p>
          </div>

          <div className='join-buttons'>
            <div>
              <span className='signin-button' onClick={this.showLogin}>sign in</span>
            </div>
            <div>
              <span className='signup-button' onClick={this.showSignUp}>sign up</span>
            </div>
          </div>
        </div>
        {this.props.data.signUp === false ?
          null
          :
          <div className='login-container'>
            <RegisterForm />
          </div>
        }
        {
          this.props.data.login === false ?
            null
            :
            <div className='login-container'>
              <LoginForm />
            </div>
        }
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
