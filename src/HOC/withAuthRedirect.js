import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            //////  Редирект ///////
            if(!this.props.isAuth){             // проверяем, если мы не авторизованны, тогда нас перенаправляет на страницу логина
                return <Navigate to={ "/login"}/>
            }
            //////////////////////////
            return <Component {...this.props}/>
        }
    }


    let mapStateToPropsForRedirect = (state) => {
        return{
            isAuth: state.auth.isAuth
        }
    }
    
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}