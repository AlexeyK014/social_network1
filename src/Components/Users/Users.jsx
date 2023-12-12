import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
        
    return <div>
        <Paginator 
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}/>
        {
            users.map(u => <User 
                                user={u} 
                                key={u.id}
                                followingInProgress={props.followingInProgress}
                                followTC={props.followTC}
                                unfollowTC={props.unfollowTC} /> )
        }
    </div>
}

export default Users;
