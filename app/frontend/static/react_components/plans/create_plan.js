import React from "react";
import ReactDOM from "react-dom";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

const icons = ['fipicon-angle-left', 'fipicon-angle-right', 'fipicon-angle-up', 'fipicon-angle-down'];
const colors = ['cyan', '']

class CreatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme : "bluegrey",
            icon :'fipicon-angle-left',
        }

        this.handleSelectIcon = this.handleSelectIcon.bind(this);
    }

    handleSelectIcon(selected_icon){
        this.setState({icon : selected_icon});
    }

    render(){
        return (
            <div className = "create-a-plan">
                <p className="pl-1">Name your habit:</p>
                <input className= "habit-name" placeholder = "my plan"></input>
                <div className="d-flex">
                    <div className="icon-selection">
                        <p className="pt-3"> Pick an icon: </p>
                        <FontIconPicker icons={['fipicon-angle-left', 'fipicon-angle-right', 'fipicon-angle-up', 'fipicon-angle-down']} value={this.state.icon} onChange={this.handleSelectIcon} theme={this.state.theme}></FontIconPicker>
                    </div>
                    <div className="icon-color-selection pt-3 pl-5">
                        <p> Pick a color: </p>
                        <div className="d-flex pt-3">
                            <span><i className="fas fa-circle fa-2x" style={{color:"cyan"}}></i></span>
                            <span><i className="fas fa-circle fa-2x pl-2" style={{color:"bluegrey"}}></i></span>
                            <span><i className="fas fa-circle fa-2x pl-2" style={{color:"purple"}}></i></span>
                        </div>
                    </div>
                </div>
                <div className = "dropdown-menu"></div>
                <p>Add a tag</p>
                <p>Choose frequency</p>
                <p>Choose duration</p>
                <p>Choose the level of difficulty</p>
                <p>Write something down to motivate yourself</p>
            </div>
            )
    }
}

export default CreatePlan;