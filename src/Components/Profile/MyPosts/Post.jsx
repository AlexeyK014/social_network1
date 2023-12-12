import React from "react";
import style from './Post.module.css';
import avaProfile from '../../../img/avaProfile.jpg';

const Post = (props) => {
    return(
        <div className={style.post}>

            <div>
                <img src={avaProfile}></img>
            </div>
           
            <div>
                {props.post}
            </div>
                
            <div>
                Like: {props.like}
            </div>
                
            
        </div>
    )
}

export default Post