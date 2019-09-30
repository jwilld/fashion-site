import React, { Component } from 'react'
import { connect } from 'react-redux' 
import './ServerResponse.css'
import { Redirect } from 'react-router-dom'


class ServerResponse extends Component{
    render(){
        return(
            <div>
                {
                    this.props.data.isRegistered === true ?

                    <div className='sign-up-success'>
                        <span>Sign up succes! Now you can sign in.</span>
                    </div>
                    :
                    null

                }
                {
                    this.props.data.isLoggedIn === true ?
                    <Redirect to='/home' />
                    :
                    this.props.data.loginStart === true ?
                    <div className='login-fail'>
                        <span>The User Name or Password is Incorrect.</span>
                    </div>
                    :
                    null

                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state
    };
  };
  export default connect(mapStateToProps)(ServerResponse);