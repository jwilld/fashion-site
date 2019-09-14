import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { user_creator } from "../../actions/actions"

class RegisterForm extends Component {
    constructor(){
        super();
        this.state ={
            formFields:['first_name', 'last_name', 'email', 'password']
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        let form = new FormData(e.target)
        let newUser = {}
        this.state.formFields.forEach(field => newUser[field] = form.get(field))
        this.props.dispatch(user_creator(newUser));
        document.getElementById('register-form').reset();
        

        
    }  
    render() {
        console.log(this.props)
        const formFields = this.state.formFields
        // takes the input from the form to give to the store and API
        // maps the formFields to make the input form 
        let form = formFields.map((field, i) => (
            // remember to use " name "  so the data can be selected with form
            <div key ={i}>
                <span >{field}</span>

                <input name={field} ></input>
            </div>
        ))
        return (
            <div>
                <div onSubmit={this.handleSubmit}>
                    <form id ='register-form'>
                        {form}
                        <input type='submit' />
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

