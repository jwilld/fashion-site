

const initialState = {
    isLoggedIn:false,
    userData: {},
    isFetching: false,
    isError: false,
    isRegistered: false,
    signUp: false,
    login: false,
    showAccess: false,
    postSent: false,
    postError: false,
    postSuccess: false,
    formFields: ['first_name', 'last_name', 'email', 'password'],
    loginFields: ['email','password'],
    postFields: ['title','photographer','photo','area'],
    posts:[{photo:'default'}],
    postFetching: false,
    postFetched: false,
    postFetchError: false,
    userFirstName:'',
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
                isLoggedIn: true,
                userFirstName:action.name
            })

        case "LOGIN_FAILURE":
            return Object.assign({}, state, {
                isLoggedIn: false
            })
        case "SEND_POST":
            return Object.assign({}, state, {
                postSent: true,
                postError: false,
                postSuccess: false
                
            })
        case "POST_ACCEPTED":
            return Object.assign({}, state, {
                postSent: true,
                postError: false,
                postSuccess: true
                
            })
        case "POST_DENIED":
            return Object.assign({}, state, {
                postSent: true,
                postError: true,
                postSuccess: false
                
            })

        case "GET_START":{
            return Object.assign({}, state, {
                postFetching: true
            })
        }
        case "GET_SUCCESS":{
            return Object.assign({}, state, {
                postFetching: false,
                postFetched: true,
                posts: action.posts.data
            })
        }
        case "GET_FAIL":{
            return Object.assign({}, state, {
                postFetching: false,
                postFetchError: true
            })
        }
        default:
            return state;
    }
}

export default asyncReducer;
