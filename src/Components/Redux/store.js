import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: "Привет", like: 5},
                {id: 2, post: "Как дела?", like: 10},
            ],
            newPostText: "ff"
        },
    
        dialogs: {
            dialogsData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Pavel"},
                {id: 3, name: "Smith"},
                {id: 4, name: "Jon"},
            ],
            messagesData: [
                {message: "Hello"},
                {message: "Good bay!"},
            ], 
            newMessageText: 'dsfdf'
        }
        
    },
    getState(){
        return this._state
    },
    
    _callSubscriber(){
        console.log('state exchange');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action); 

    
        this._callSubscriber(this._state)
       
    }
}


export default store;
window.state = store;


