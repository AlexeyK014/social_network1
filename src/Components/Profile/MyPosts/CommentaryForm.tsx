import { Field, InjectedFormProps, reduxForm } from "redux-form";
import React from "react";

export type CommentFormOwnProps = {
    placeholder: string
    name: string
    component: string | React.Component
}

export type NewCommentFormType = {
    newCommentText: string
}

type PropsType = {}

const CommentaryForm: React.FC<InjectedFormProps<NewCommentFormType, PropsType> & CommentFormOwnProps & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={'input'} 
                    name="newCommentText"   
                    placeholder="your comment"/>
            </div>
            <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

export default CommentaryForm;

export const CommentReduxForm = reduxForm<NewCommentFormType, PropsType>({form: 'commentForm'})(CommentaryForm)