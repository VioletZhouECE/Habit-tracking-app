import React from "react";
import ReactDOM from "react-dom";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
//import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
//import '@fonticonpicker/rnpmeact-fonticonpnpicker/dist/fonticonpicker.material-theme.react.css';

class CreatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
                <p>Name your habit</p>
                <input className= "habit-name" placeholder = "my plan"></input>
                <FontIconPicker icons={['fipicon-angle-left', 'fipicon-angle-right', 'fipicon-angle-up', 'fipicon-angle-down']} value={this.state.icon} onChange={this.handleSelectIcon}></FontIconPicker>
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