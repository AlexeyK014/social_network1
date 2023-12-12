import React from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={style.navbar}>
                <div className={style.item}>
                    <NavLink to={"/profile"} className={navData => navData.isActive ? style.active : style.item}>Профайл</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={"/users"} className={navData => navData.isActive ? style.active : style.item}>Пользователи</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={"/dialogs"} className={navData => navData.isActive ? style.active : style.item}>Сообщения</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={"/news"} className={navData => navData.isActive ? style.active : style.item}>Новости</NavLink>
                </div>
                
        </nav>
    )
}

export default Navbar;