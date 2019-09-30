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
        return axios.post('https://fashion-api2.herokuapp.com/register.php', user)
            .then(data => {
                data.status === 200?
                dispatch(user_accepted(user))
                :
                dispatch(user_rejected())
            })
            // .then(dispatch(user_accepted(user)))
            // .catch(e => dispatch(user_rejected()));
    }
}

export const login_start = () => {
    return {
        type: "LOGIN_START"
    }
}
export const login_success = (name) => {
    return {
        type: "LOGIN_SUCCESS",
        name:name

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
        return axios.post('https://fashion-api2.herokuapp.com/login.php', user)
            .then(response => {
                console.log(response)
                if (response.data.message === 'Successful login.') {
                    dispatch(login_success(response.data.firstname))
                }
                else {
                    dispatch(login_failure())
                }
            })
        .catch(e => dispatch(login_failure()));
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

export const send_post = () => {
    return {
        type: "SEND_POST"
    }
}
export const post_accepted = () => {
    return {
        type: "POST_ACCEPTED"
    }
}
export const post_denied = () => {
    return {
        type: "POST_DENIED"
    }
}

export const make_post = post => {
    store.dispatch(send_post());
    return function (dispatch, getState) {
        return axios.post('https://fashion-api2.herokuapp.com/post.php', post)
            .then(response => {
                if (response.data.message === 'post success') {
                    dispatch(post_accepted(),
                    get_posts()
                    )
                    
                }
                else {
                    dispatch(post_denied())
                }
            }).catch(dispatch(post_denied()))
    }
}

export const get_images = () => {
    return {
        type: "GET_START"
    }
}
export const get_images_success = (data) => {
    return {
        type: "GET_SUCCESS",
        posts:data
    }
}
export const get_images_fail = () => {
    return {
        type: "GET_FAIL"
    }
}

export const get_posts = () => {
    store.dispatch(get_images());
    return function (dispatch, getState) {
        return axios.get('https://fashion-api2.herokuapp.com/getPosts.php')
            .then(response => {
                dispatch(get_images_success(response))
            })
            .catch(dispatch(get_images_fail()));
    }
}

export const display_post = () => {
    return{
        type:"DISPLAY_POST"
    }
}

export const sign_out = () => {
    return {
        type: "SIGN_OUT"
    }
}


