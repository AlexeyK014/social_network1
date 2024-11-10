import React from "react";
import Post from "./Post.tsx";
import { PostFormValueType, ReduxMyPostForm } from "./MyPostForm.tsx";
import { PostDataType } from "../../../Types/Types.ts";
import style from './Post.module.css'
import { Blog } from "../Posts/PostCard/Blog.js";


export type MapPropsType = {
    postData: Array<PostDataType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void 
    // addComment: (newCommentText: string) => void 
}




const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo(props => { 


    // let posts = 
    //     [...props.postData]
    //         .reverse()
    //         .map(post => <Post id={post.id} key={post.id} post={post.post} like={post.like} />)
    <Blog />

    // let newPostelement = React.createRef(); // создаём ссылку на textarea

    let onAddPost = (values: PostFormValueType) => {
        props.addPost(values.newPostText);
        
    }

    return(
        <div>
            <div className={style.postsForm}>
                <ReduxMyPostForm onSubmit={onAddPost} />
                {/* <div>
                    {posts}
                </div> */}
            </div>
        </div>
        ) 
    }
)
export default MyPosts;


