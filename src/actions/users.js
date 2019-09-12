import { MAKE_USER, CREATE_USER, REMOVE_USER, UPDATE_USER, MAKE_USER_STARTED, MAKE_USER_SUCCESS, MAKE_USER_FAILURE } from '../constants/user.constants'
import Axios from 'axios';

export const makeUser = (data) => {
    return{
    type: MAKE_USER,
    data      
    }
}


export const createUser = data => {
    return dispatch => {
        dispatch(makeUser(data))
        return Axios.post('http://127.0.0.1:8080/register.php', data)
        .then(response => response.json)
    }
}

const makeUserSuccess = user => ({
    type: MAKE_USER_SUCCESS,
    payload: {
        ...user
    }
});

const makeUserStarted = () => ({
    type: MAKE_USER_STARTED
});

const makeUserFailure = error => ({
    type: MAKE_USER_FAILURE,
    payload: {
        error
    }
});

// export function createNewUser(first_name, last_name, email, password) {
//     return {
//         type: CREATE_USER,
//         payload: {
//             first_name,
//             last_name,
//             email,
//             password
//         }
//     }
// }

// export const removeUser = id => ({ type: REMOVE_USER, payload: id })

// export const updateUser = (id, updateUser) => ({
//     type: UPDATE_USER,
//     payload: {
//         id,
//         updateUser
//     }
// })