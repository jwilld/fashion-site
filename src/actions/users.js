import { CREATE_USER, REMOVE_USER, UPDATE_USER } from '../constants/user.constants'
import axios from 'axios';

export function createNewUser(data) {
    return {
        type: CREATE_USER,
        payload: data
    }
}
    
export function makeUser(data) {
    return dispatch => {
        dispatch(createNewUser(data))
        return axios.post('http://127.0.0.1:8080/register.php',data)
        .then(response => console.log(response.json()))
    }
}

export const removeUser = id => ({ type: REMOVE_USER, payload: id })

export const updateUser = (id, updatePost) => ({
    type: UPDATE_USER,
    payload: {
        id,
        updateUser
    }
})