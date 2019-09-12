
import { MAKE_USER_STARTED,MAKE_USER_SUCCESS, MAKE_USER_FAILURE } from '../constants/user.constants';



const initialState = {
    loading: false,
    users:[],
    error:null
}

export default function userReducer(state=initialState, action){
    switch(action.type){
        case MAKE_USER_STARTED:
            return {
                ...state,
                loading: true
            };
        case MAKE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: [...state.users, action.payload]
            }
        case MAKE_USER_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload.error
            };
            default:
                return state;
    }
}


// const DEFAULT_STATE = {
//     users: []
// }


// export default function userReducer(state = DEFAULT_STATE, action) {
//     switch (action.type) {
//         case CREATE_USER:
//             return { ...state, users: [...state.users, action.payload] };
//         case REMOVE_USER:
//             return {
//                 ...state, users: state.users.filter((user, id) => {
//                     return id !== action.payload
//                 })
//             }
//         case UPDATE_USER:
//             return {
//                 ...state, users: state.users.map((user, index) => {
//                     if (index !== action.payload.id) return user

//                     return { ...user, ...action.payload.updatedUser }
//                 })
//             }
//         default:
//             return state;
//     }


// }