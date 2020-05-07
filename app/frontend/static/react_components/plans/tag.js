import React from "react";
import ReactDOM from "react-dom";

class Tag extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className ='tag mr-2 d-flex' style={{backgroundColor : 'rgb(163,212,255)'}}>
                <span className='pl-1' style = {{color : 'white'}}>{this.props.tag}</span>
                <span className = 'delete-icon px-1' style ={{color : 'dodgerblue'}} onClick={(e)=>this.props.onDelete(this.props.tag)}><i className='fas fa-times'></i></span>
            </div>
        )
    }
}

export default Tag;