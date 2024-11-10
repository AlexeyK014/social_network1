import React from "react";
import { actions } from "../../Redux/profile-reducer.ts";
import MyPosts, { DispatchPropsType, MapPropsType } from "./MyPosts.tsx";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store.ts";


const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    } 
}


const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPost})(MyPosts);

export default MyPostsContainer;