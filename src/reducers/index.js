const initialState = {
    userData: {},
    isFetching: false,
    isError: false
};



const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT_USER":
            return Object.assign({}, state, {
                isFetching: true,
                userData: {},
                isError: false
            })

        case "USER_ACCEPTED":
            return Object.assign({}, state, {
                userData: action.data,
                isFetching: false,
                isError: false
            })
        case "USER_REJECTED":
            return Object.assign({}, state, {
                isError: true,
                isFetching: false
            })
        default:
            return state;
    }
}

export default asyncReducer;
