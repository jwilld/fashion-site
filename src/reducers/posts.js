import { CREATE_POST, UPDATE_POST, REMOVE_POST } from "../constants/post.constants"


const DEFAULT_STATE = {
    posts: []
}

export default function postReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case REMOVE_POST:
            return {
                ...state, posts: state.posts.filter((user, id) => {
                    return id !== action.payload
                })
            }
        case UPDATE_POST:
            return {
                ...state, posts: state.posts.map((post, index) => {
                    if (index !== action.payload.id) return post

                    return { ...post, ...action.payload.updatedPost }
                })
            }
            default:
                return state;
    }


}