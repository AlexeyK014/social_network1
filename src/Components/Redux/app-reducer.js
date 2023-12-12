import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'app/SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            } 
        default:
            return state;
    }
}

export default appReducer;

//// ACTION CREATOR ////

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

////////////////////////////


                            /////////  Thunk  /////////

///////////////   Получаем данные профиля   ////////////////
export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])   // дожидаемся всех пареллельных запросов
            .then(() => {
                dispatch(initializedSuccess());
        });
       
    }
}
