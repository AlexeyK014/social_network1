import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FieldValidatorType, maxLengthCreator, required } from "../../utils/validators/validators.ts";
import { Textarea } from "../../common/FormsControls/FormsControls.tsx";
import style from './Post.module.css';

export type MyPostsFormPropsType = {
    placeholder: string
    name: string
    component: string | React.Component
    validate: Array<FieldValidatorType>
}
type PropsType = {}

export type PostFormValueType = {
    newPostText: string
}

const maxLength50 = maxLengthCreator(50)


const MyPostForm: React.FC<InjectedFormProps<PostFormValueType, PropsType> & MyPostsFormPropsType & PropsType> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <span className={style.formPage}>
                <span>
                    <Field  
                        className={style.textareaForm}
                        component={Textarea} 
                        placeholder="Поделитесь вашими успехами" 
                        name="newPostText"
                    />
                    
                </span>
                <span>
                    <button className={style.btnForm}>Отправить <br/> сообщение</button>
                </span>
            </span>
            
        </form>
    )
}
export default MyPostForm;
export const ReduxMyPostForm = reduxForm<PostFormValueType, PropsType>({ form: "ProfileAddNewPostForm" })(MyPostForm)
