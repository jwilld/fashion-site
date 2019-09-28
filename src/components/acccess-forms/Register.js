import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { user_creator } from "../../actions/actions"
import ServerResponse from '../server-response/ServerResponse'

class RegisterForm extends Component {
    s

    handleSubmit = e => {
        e.preventDefault();
        let form = new FormData(e.target)
        let newUser = {}
        this.props.data.formFields.forEach(field => newUser[field] = form.get(field))
        this.props.dispatch(user_creator(newUser));
        document.getElementById('register-form').reset();



    }
    render() {
        const formFields = this.props.data.formFields
        // takes the input from the form to give to the store and API
        // maps the formFields to make the input form 
        let form = formFields.map((field, i) => (
            // remember to use " name "  so the data can be selected with form
            <div key={i} className={field + ' form-field'}>
                <div className='form-field-sub'>
                    <div className='field-label-container'>
                        <span className='field-label' >{field}</span>
                    </div>
                    <input placeholder='test' className='register-input' name={field} ></input>
                </div>
            </div>
        ))
        return (
            <div>
                <div onSubmit={this.handleSubmit}>
                    <form id='register-form'>
                        <div className='register-container'>
                            <div className='server-response'>
                                <ServerResponse />
                            </div>
                            <div className='register-sub-container'>
                                {/* {form} */}
                                <div className=' form-field'>
                                    <div className='form-field-sub'>
                                        <div className='field-label-container'>
                                            <span className='field-label' >first name</span>
                                        </div>
                                        <input placeholder='john' className='register-input' name='first_name' ></input>
                                    </div>
                                </div>
                                <div className=' form-field'>
                                    <div className='form-field-sub'>
                                        <div className='field-label-container'>
                                            <span className='field-label' >last name</span>
                                        </div>
                                        <input placeholder='doe' className='register-input' name='last_name' ></input>
                                    </div>
                                </div>
                                <div className=' form-field'>
                                    <div className='form-field-sub'>
                                        <div className='field-label-container'>
                                            <span className='field-label' >email</span>
                                        </div>
                                        <input placeholder='johndoe@gmail.com' className='register-input' name='email' ></input>
                                    </div>
                                </div>
                                <div className=' form-field'>
                                    <div className='form-field-sub'>
                                        <div className='field-label-container'>
                                            <span className='field-label' >password</span>
                                        </div>
                                        <input type='password' placeholder='example1234' className='register-input' name='password' ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='register-submit-container'>
                                <div>
                                    <input className='submit-button' type='submit' />
                                </div>
                            </div>
                        </div>
                    </form>
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
export default connect(mapStateToProps)(RegisterForm);

