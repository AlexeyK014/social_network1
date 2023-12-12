const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


let initialState = {
    dialogsData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Pavel"},
        {id: 3, name: "Smith"},
        {id: 4, name: "Jon"},
    ],
    messagesData: [
        {message: "Hello"},
        {message: "Good bay!"},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
         
        case ADD_NEW_MESSAGE: 
            let body = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {message: body}]
            };
        default:
            return state;
    }
    
}

export default dialogsReducer;




export const addMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_NEW_MESSAGE, newMessageText
    }
}

