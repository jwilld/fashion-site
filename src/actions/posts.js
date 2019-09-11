import { CREATE_POST, REMOVE_POST, UPDATE_POST } from '../constants/post.constants'

export function createNewPost(title,photographer,area) {
    return {
        type: CREATE_POST,
        payload: {
            title,
            photographer,
            area
        }
    }
}

export const removePost = id => ({type: REMOVE_POST, payload:id})

export const updatePost = (id, updatePost) => ({
    type: UPDATE_POST,
    payload: {
        id,
        updatePost
    }
})