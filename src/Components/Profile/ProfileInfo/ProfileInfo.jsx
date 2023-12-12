import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHOOKS from "./ProfileStatusHOOKS";
import userPhoto from '../../../img/avaUsers.png'

const ProfileInfo = ({profile, status, updateStatus}) => {
    if( !profile){
        return <Preloader />
    }
    
    return (
        <div>
            <div >
                <img className={style.userPhoto} alt="userPhoto" src={profile.photos.large || userPhoto}></img>
            </div>
            
            <ProfileStatusHOOKS 
                status={status}
                updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo