import React from "react";


class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    ///////  Метол изменения span ===>>> input  /////////
    acivateEditeMode = () => {
        this.setState({    ///  в setState передаём объект свойство которого хотим поменять. setState - ассинхронен, изменение придёт потом
            editMode: true
        })
    }
    ////////////////////////////////////////////////////
    ///////  Метод изменения input ===>>> span  /////////
    deacivateEditeMode = () => {
        this.setState({    ///  в setState передаём объект свойство которого хотим поменять. setState - ассинхронен, изменение придёт потом
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    ////////////////////////////////////////////////////

    onStatusChange = (e) => {
       this.setState({
            status: e.currentTarget.value
       }) 
    }

    componentDidUpdate(prevProps, prevState){   // внутри coponentDidUpdate - setState должен быть внутри какого то условия
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        
        console.log("update");
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.acivateEditeMode}>{this.props.status || '--'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deacivateEditeMode} value={this.state.status}/>
                    </div>
    }
           
            </div>
            
        )
    }
    
}
export default ProfileStatus
