import axios from 'axios'
import store from '../store/store'


export const submit_user = () => {
    return {
        type: "SUBMIT_USER"
    };
};

export const user_accepted = () => {
    return {
        type: "USER_ACCEPTED"
    }
}

export const user_rejected = () => {
    return {
        type: "USER_REJECTED"
    }
}

export const user_creator = user => {
    store.dispatch(submit_user());
    return function (dispatch, getState) {
        return axios.post('http://localhost:9000/register.php', user)
            .then(data => {
                console.log(data)
            })
            .then(dispatch(user_accepted(user)))
            .catch(e => dispatch(user_rejected()));
    }
}

export const login_start = () => {
    return {
        type: "LOGIN_START"
    }
}
export const login_success = () => {
    return {
        type: "LOGIN_SUCCESS"
    }
}

export const login_failure = () => {
    return {
        type: "LOGIN_FAILURE"
    }
}

export const login_user = user => {
    store.dispatch(login_start());
    return function (dispatch, getState) {
        return axios.post('http://localhost:9000/login.php',user)
        .then(response => {
            if(response.data.message === 'Successful login.'){
                dispatch(login_success())
            }
            else{
                dispatch(login_failure())
            }
        })
        // .catch(e => dispatch(login_failure()));
    }
}

export const sign_up = () => {
    return {
        type: "SIGN_UP_BOOL"
    }
}
export const login = () => {
    return {
        type: "LOGIN_BOOL"
    }
}
export const showAccess = () => {
    return {
        type: "SHOW_ACCESS"
    }
}


