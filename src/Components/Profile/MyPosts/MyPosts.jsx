import React, { PureComponent } from "react";
import Post from "./../MyPosts/Post";
import MyPostForm from "./MyPostForm";
import { reduxForm } from "redux-form";

const ReduxMyPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(MyPostForm)


const MyPosts = React.memo(props => { 


    let posts = 
        [...props.postData]
            .reverse()
            .map(post => <Post post={post.post} like={post.like} />)

    // let newPostelement = React.createRef(); // создаём ссылку на textarea

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    



    return(
        <div>


            <div>
                <ReduxMyPostForm onSubmit={onAddPost} />
                <div>
                    {posts}
                </div>

            </div>
        </div>
        ) 
    }
)
export default MyPosts;