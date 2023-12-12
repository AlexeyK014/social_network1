import React from "react";
import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../Redux/auth-reducer"
import { Navigate } from "react-router-dom";


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if( props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        
        
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
    
}

export default connect(mapStateToProps, {login})(Login);

