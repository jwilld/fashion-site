import React from 'react';
import './Register.css';

function RegisterForm(){
    return(
        <div>
            <div>
                <span>first name</span>
                <input></input>
            </div>
            <div>
                <span>last name</span>
                <input></input>
            </div>
            <div>
                <span>e-mail</span>
                <input></input>
            </div>
            <div>
                <span>password</span>
                <input></input>
            </div>
            <div>
                <span>type password again</span>
                <input></input>
            </div>
        </div>
    )
}

export default RegisterForm;

