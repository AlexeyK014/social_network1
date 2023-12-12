import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; 
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postData: [
        {id: 1, post: "Привет", like: 5},
        {id: 2, post: "Как дела?", like: 10},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 5,
                post: action.newPostText,
                like: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
       
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            } 
        case DELETE_POST: 
            return{
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
    

    
}

export default profileReducer

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}


///////  Thunk  ////////

export const getUserProfile = (userId) => async(dispatch) => {
    
        let response = await profileAPI.getProfile(userId);
            dispatch(setUserProfile(response.data));
    
}

export const getStatus = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async(dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
}