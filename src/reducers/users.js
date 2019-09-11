import { CREATE_USER, REMOVE_USER, UPDATE_USER } from '../constants/user.constants'

const DEFAULT_STATE = {
    users: []
}

export default function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CREATE_USER:
            async function createUser(){
                await axios
                    .post('http://localhost:9000/register.php'),{
                        first_name: action.payload.first_name,
                        last_name: action.payload.last_name,
                        email: action.payload.email,
                        password: action.payload.password
                    }
            }
            return { ...state, users: [...state.users, action.payload] };
        case REMOVE_USER:
            return {
                ...state, users: state.users.filter((user, id) => {
                    return id !== action.payload
                })
            }
        case UPDATE_USER:
            return {
                ...state, users: state.users.map((user, index) => {
                    if (index !== action.payload.id) return user

                    return { ...user, ...action.payload.updatedUser }
                })
            }
            default:
                return state;
    }


}