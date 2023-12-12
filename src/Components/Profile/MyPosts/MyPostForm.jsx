import React from "react";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)


const MyPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  
                    component={Textarea} 
                    placeholder="your post" 
                    name="newPostText"
                    validate={[required,  maxLength10]}
                />
                
            </div>

                <button>отправить сообщение</button>
        </form>
    )
}
export default MyPostForm;