import React from "react";
import { connect } from "react-redux";
import { followTC, unfollowTC, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching,  toggleFollowingInProgress, getUsersTC } from "../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../Redux/users-selector";



class UsersContainer extends React.Component{
    componentDidMount(){
        const {currentPage, pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize)
        
    }

    onPageChanged = (pageNumber, pageSize) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
        this.props.getUsersTC(pageNumber, pageSize);
    }


    render(){
        return <>
        {this.props.isFetching ? <Preloader/> : null} 
            <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followTC={this.props.followTC}
                unfollowTC={this.props.unfollowTC}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default compose(
    connect(mapStateToProps, {
        followTC,
        unfollowTC,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress,
        getUsersTC
    }),
    withAuthRedirect
)(UsersContainer)
