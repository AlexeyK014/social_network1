import React from "react";
import style from './Users.module.css';
import avaUsers from '../../img/avaUsers.png';
import { NavLink } from "react-router-dom";


let User = ({user, followingInProgress, unfollowTC, followTC}) => {
        
    return (
         <div >
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : avaUsers}  className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                            ? <button disabled={followingInProgress.some(id => id === user.id) } // some - если хоть одна id равна id  пользователя
                                onClick={() => {unfollowTC(user.id)}}>Unfollow</button> 
                            : <button disabled={followingInProgress.some(id => id === user.id) } 
                                onClick={() => {followTC(user.id)}}>Follow</button>} 
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    
                </span>
            </div>)
        
}

export default User;
