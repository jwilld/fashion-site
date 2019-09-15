import React, { Component } from 'react'
import './Login.css'
import { connect } from 'react-redux'
import { login_user } from '../../actions/actions'
import { Link } from 'react-router-dom'


class LoginForm extends Component {
    handleSubmit = e => {
        const loginFields = this.props.data.loginFields
        e.preventDefault();
        let form = new FormData(e.target)
        let loginCred = {}
        loginFields.forEach(field => 
            loginCred[field] = form.get(field))
        this.props.dispatch(login_user(loginCred));
        document.getElementById('login-form').reset();
    }

    render() {
        const loginFields = this.props.data.loginFields;
        let loginForm = loginFields.map((field, i ) => (
            <div key={i}>
                <span>{field}</span>
                <input name={field}></input>
            </div>
        ))
        return (
            <div onSubmit={this.handleSubmit}>
                <form id='login-form'>
                    {loginForm}
                    <input type='submit'/>
                </form>
                <Link to='/home'>
                    go home
                </Link>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(LoginForm);





