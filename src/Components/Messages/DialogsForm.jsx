import React from "react";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={Textarea} 
                    name="newMessageText"   
                    placeholder="your message"
                    validate={[required,  maxLength100]}/>
            </div>
            <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

export default DialogsForm;