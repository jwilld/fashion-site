import React from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { userCreator } from "../../actions/actions"

function RegisterForm(){
    // takes the input from the form to give to the store and API
    const formFields = ['first_name','last_name','email','password']
    let handleSubmit = e => {
        e.preventDefault();
        let form = new FormData(e.target)
        let newUser = {}
        formFields.forEach( field => newUser[field] = form.get(field))
        console.log(newUser)
        
    }


// maps the formFields to make the input form 
    let form = formFields.map(field => (
        <div>
            <span>{field}</span>
            <input></input>
        </div>
    ))
    return(
        <div>
            <div onSubmit={handleSubmit}>
            <form>
                {form}
                <input type='submit'/>
            </form>
            </div>
        </div>

    )
}
export default RegisterForm;

