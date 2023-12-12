import { usersAPI } from "../API/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] // храними в массиве. В массив помещаем id, того пользователя на которого подписываемся или отписываемся
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                    ...state, 
                    users: [...state.users.map(u => {
                        if( u.id === action.userId){
                            return {...u, followed: true}
                        }
                        return u
                    })]
                }
        case UNFOLLOW:
            return {
                ...state, 
                users: [...state.users.map(u => {
                    if( u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })]
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)} // усли false. пропускаем ту id, которая пришла к нам в action
        }

        default:
            return state;
    }
    
}

export default usersReducer;




export const followSuccsess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccsess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching  = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress  = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})



////////  Thunk   ////////

export const getUsersTC = (currentPage, pageSize) => {
    return async(dispatch) => {
        dispatch(toggleIsFetching(true));
    
        let data = await usersAPI.getUsers(currentPage, pageSize);
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followunfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId))
            let data = await apiMethod(userId)
                if( data.resultCode === 0){
                    dispatch(actionCreator(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId));
                dispatch(actionCreator(userId))
}

export const followTC = (userId) => {
    return async(dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccsess;
        followunfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }; 
};

export const unfollowTC = (userId) => {
    return async(dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        let actionCreator = unfollowSuccsess;
        followunfollowFlow(dispatch, userId, apiMethod, actionCreator);   
    };
};
