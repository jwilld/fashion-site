

const initialState = {
    isLoggedIn:false,
    userData: {},
    isFetching: false,
    isError: false,
    isRegistered: false,
    signUp: false,
    login: false,
    showAccess: false,
    formFields: ['first_name', 'last_name', 'email', 'password'],
    loginFields: ['email','password']
};




const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT_USER":
            return Object.assign({}, state, {
                isFetching: true,
                userData: {},
                isError: false,
                isRegistered: false
            })

        case "USER_ACCEPTED":
            return Object.assign({}, state, {
                userData: action.data,
                isFetching: false,
                isError: false,
                isRegistered: true
            })
        case "USER_REJECTED":
            return Object.assign({}, state, {
                isError: true,
                isFetching: false,
                isRegistered: false
            })
        case "SIGN_UP_BOOL":
            return Object.assign({}, state, {
                signUp: !state.signUp,
                login: false
            })
        case "LOGIN_BOOL":
            return Object.assign({}, state, {
                login: !state.login,
                signUp: false
            })
        case "SHOW_ACCESS":
            return Object.assign({}, state, {
                showAccess:!state.showAccess,
                login: false,
                signUp: false
            })

        case "LOGIN_START":
            return Object.assign({}, state, {
                isLoggedIn: false
            })
        case "LOGIN_SUCCESS":
            return Object.assign({}, state, {
                isLoggedIn: true
            })

        case "LOGIN_FAILURE":
            return Object.assign({}, state, {
                isLoggedIn: false
            })
        default:
            return state;
    }
}

export default asyncReducer;
