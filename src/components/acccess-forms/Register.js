import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { user_creator } from "../../actions/actions"

class RegisterForm extends Component {s

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
            <div key ={i}>
                <span className='field-label' >{field}</span>

                <input className='register-input' name={field} ></input>
            </div>
        ))
        return (
            <div>
                <div onSubmit={this.handleSubmit}>
                    <form id ='register-form'>
                        {form}
                        <input className='submit-button' type='submit' />
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

