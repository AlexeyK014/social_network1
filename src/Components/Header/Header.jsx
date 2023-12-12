import React from "react";
import style from './Header.module.css'
import { NavLink, Navigate } from "react-router-dom";

const Header = (props) => {
    
    return(
        <header className={style.header}>
            <div className={style.headerContent}>
                <div className={style.loginBlock}>
                    {props.isAuth 
                        ? <div>
                            <div>Login: {props.login}</div>
                            <div>ID: {props.userId}</div>
                            <button onClick={props.logout}>Выйти</button>
                          </div>
                        : <NavLink to={'/login'}>Login</NavLink> }
                </div>
                {/* <div className={style.idBlock}>
                     { props.isAuth ? <div>ID: {props.userId}</div> : '' }
                </div> */}
                
            </div>
            
        </header>
    )
}

export default Header