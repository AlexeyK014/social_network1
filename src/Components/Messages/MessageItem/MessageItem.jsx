import React from "react"
import style from './../Dialogs.module.css';


const MessageItem = (props) => {
    return <div>
        <div className={style.message}>{props.message}</div>
    </div>
}

export default MessageItem