import React from "react";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from '../common/FormsControls/FormsControls.module.css'

let maxLength30 = maxLengthCreator(30);


const LoginForm = ({handleSubmit, error}) => {
    return (
        
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder="email" name={"email"} component={Input} validate={[required,  maxLength30]}/>
                </div>
                <div>
                    <Field placeholder="password" type="password" name={"password"} component={Input} validate={[required,  maxLength30]}/>                
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"} component={Input} />remember me         
                </div>
                {
                    error && <div className={style.formSummaryError}>
                        {error}
                    </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
      
        
        
    )
}

export default LoginForm;