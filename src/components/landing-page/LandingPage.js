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

    console.log(this.props)
    return (

      <div className="landing-container">
        <div className="website-title">
          
          <Link onClick = {this.showAccessForms}to = ''className='website-title-text'>
            <h1>trnd</h1>
          </Link>
          {
          
            this.props.data.showAccess === false ?
            null
            :
          <div>
            <h5 onClick={this.showLogin}>login</h5>
            <h5 onClick={this.showSignUp}>sign up</h5>
          </div>
          
          
          }
        </div>
        {this.props.data.signUp === false ?
          null
          :
          <div className='login-container'>
            <RegisterForm/>
          </div>
        } 
        {
          this.props.data.login === false ?
          null
          :
          <div className='login-container'>
            <LoginForm/>
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
