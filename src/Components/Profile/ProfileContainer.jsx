import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus } from "../Redux/profile-reducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

export function withRouter(Children){
    return(props) => {
    let match = {params: useParams()};
    return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){ 
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render(){
        return(
            <Profile {...this.props} 
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                />
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,   // для отображение нашей страницы
        isAuth: state.auth.isAuth
    }
}

// let WithRouterComponent = withRouter(AuthRedirectComponent)


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)