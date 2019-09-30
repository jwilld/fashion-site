import React, { Component } from 'react'
import './Login.css'
import { connect } from 'react-redux'
import { login_user } from '../../actions/actions'
import ServerResponse from '../server-response/ServerResponse'


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
        let loginForm = loginFields.map((field, i) => (
            field === 'password' ?
                <div key={i} className='form-field'>
                    <div className='form-field-sub'>
                        <div className='field-label-container'>
                            <span className='field-label'>{field}</span>
                        </div>
                        <input type='password' className='register-input' name={field}></input>

                    </div>
                </div>
                :
                <div key={i} className='form-field'>
                    <div className='form-field-sub'>
                        <div className='field-label-container'>
                            <span className='field-label'>{field}</span>
                        </div>
                        <input className='register-input' name={field}></input>

                    </div>
                </div>
        ))
        return (
            <div className='login-container' onSubmit={this.handleSubmit}>
                <div className='login-form' >
                    <form id='login-form'>
                        <div className='login-form-container'>
                            {loginForm}
                        </div>
                        <div className='login-submit-container'>
                            <input className='submit-button' type='submit' />
                        </div>
                    </form>
                </div>
                <div className='login-server-response'>
                    <ServerResponse />
                </div>

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





