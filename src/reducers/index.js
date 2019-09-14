const initialState = {
    userData: {},
    isFetching: false,
    isError: false,
    isRegistered: false,
    formFields: ['first_name', 'last_name', 'email', 'password']
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
        default:
            return state;
    }
}

export default asyncReducer;
