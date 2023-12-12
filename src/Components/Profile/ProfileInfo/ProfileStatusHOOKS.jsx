import React, { useEffect, useState } from "react";


const ProfileStatusHOOKS = (props) => {
    
    let [editeMode, setEditeMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    // let editeMode = stateWithSetState[0];
    // let setEditeMode = stateWithSetState[1];

    useEffect( () => {       // происходит после отрисовки всеё компаненты
        setStatus(props.status);
    }, [props.status]) 

    const activateMode = () => {
        setEditeMode(true)
    }
    const deactiveteEditeMode = () => {
        setEditeMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }



        return (
            <div>
                { !editeMode &&
                    <div>
                        <span onDoubleClick={activateMode}>{props.status || '--'}</span>
                    </div>
                }
                { editeMode &&
                    <div>
                        <input onChange={onStatusChange} value={status}  autoFocus={true} onBlur={deactiveteEditeMode}/>
                    </div>
                }
           
            </div>
            
        )
    
    
}
export default ProfileStatusHOOKS
