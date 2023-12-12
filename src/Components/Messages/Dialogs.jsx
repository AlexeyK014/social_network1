import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import DialogsForm from "./DialogsForm";
import { reduxForm } from "redux-form";


const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm'})(DialogsForm)


const Dialogs = (props) => {
    let state = props.dialogs

    ///////////  Получаем диалоги и сообщения  ////////////    
    let dialogsElement = state.dialogsData.map( (dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElement = state.messagesData.map( (message) => <MessageItem message = {message.message} key={message.id}/>)
    let newMessageText = state.newMessageText;

   

    let onSubmit = (values) => {
        props.addMessage(values.newMessageText)
    }


    return (
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    {dialogsElement} 
                </div>


                <div className={style.messagesItem}>
                    {messagesElement}
                    
                    <div>
                        <DialogsReduxForm onSubmit={onSubmit}
                                            // onChange={onMessageChange} 
                                            // ref={newMessageElement} 
                                            // value={newMessageText}
                                            />
                        {/* <textarea 
                            onChange={onMessageChange} 
                            ref={newMessageElement} 
                            value={newMessageText}/> */}
                        
                    </div>
                </div>


            </div>
        )
}

export default Dialogs