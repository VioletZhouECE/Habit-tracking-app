import React from "react";
import ReactDOM from "react-dom";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import icons from '../../scripts/fontawesome_icons';

const icon_colors = [
    ["grey", "gainsboro", "grey", "bluegrey"],
    ["blue", "lightblue", "dodgerblue", "lightblue"],
    ["pink", "lightpink", "#ff1a75", "pink"],
    ["orange", "rgb(247, 211, 104)" , "orange", "orange"],
    ["teal", "turquoise", "teal", "teal"]
]

class CreatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme : "bluegrey",
            icon :'fas fa-smile',
            selected_icon_color : "grey",
            frequency_unit: "weekly",
            selected_frequency: ''
        }

        this.handleSelectIcon = this.handleSelectIcon.bind(this);
        this.handleSelectColor = this.handleSelectColor.bind(this);
        this.handleSelectFrequencyUnit = this.handleSelectFrequencyUnit.bind(this);
    }

    handleSelectIcon(selected_icon){
        this.setState({icon : selected_icon});
    }

    handleSelectColor(selected_color){  
        var selected_icon;
        var selected_theme; 

        for (const color of icon_colors){
            if (color[1] === selected_color){
                selected_icon = color[0];
                selected_theme = color[3];
            }
        }

        //change the selected icon color
        this.setState ({selected_icon_color : selected_icon});

        //change theme 
        this.setState ({theme : selected_theme});
    }

    handleSelectFrequencyUnit(e){
        this.setState({frequency_unit : e.target.text});
    }

    render(){
        //render a list of colors 
        var color_palette = [];
        icon_colors.forEach((color)=>{
            //study note: you cannot access key from the child component or through e.target.key
            //you have to use another cutsom html attribute or props to access the key
            color_palette.push(<span><i key = {color[0]} className= {this.state.selected_icon_color === color[0]? "fas fa-circle pr-2 fa-3x" : "fas fa-circle pr-2 fa-2x"} style={{color: this.state.selected_icon_color === color[0]? color[2] : color[1]}} onClick={(e)=>this.handleSelectColor(e.target.style.color)}></i></span>);
        })

        //render a list of weekly icons
        var weekly_icons = [];
        for (let i=1; i<=7; i++){
            weekly_icons.push(
                <span class="fa-layers fa-fw">
                    <i key = {i} className = {this.state.frequency_unit === 'weekly' && this.state.selected_frequency.includes(i.toString())? "fas fa-circle pr-2 fa-3x" : "fas fa-circle pr-2 fa-2x"}></i>
                    <span key = {"textlayer" + i} className ="fa-layers-text fa-inverse pr-2" data-fa-transform="shrink-8 down-3 pr-2">1</span>
                </span>
            );
        }

        return (
            <div className = "create-a-plan">
                <p className="pl-1">Name your habit:</p>
                <input className= "habit-name" placeholder = "my plan"></input>
                <div className="d-flex">
                    <div className="icon-selection">
                        <p className="pt-3"> Pick an icon: </p>
                        <FontIconPicker icons={icons} value={this.state.icon} onChange={this.handleSelectIcon} theme={this.state.theme}></FontIconPicker>
                    </div>
                    <div className="icon-color-selection pt-3 pl-5">
                        <p> Pick a color: </p>
                        <div className="d-flex pt-3">
                            <div>{color_palette}</div>
                        </div>
                    </div>
                </div>
                <p>Add a tag</p>
                <div className = "d-flex pb-2">
                <p className = 'pr-4 pb-0 mb-0'>Choose a frequency</p> 
                <div className = 'd-flex'></div>
                    <div className = {this.state.frequency_unit === 'weekly'? 'underline' : ''}  style = {{backgroundColor: this.state.frequency_unit === 'weekly' ? 'aliceblue' : ''}} onClick={this.handleSelectFrequencyUnit}><a href="#weekly">weekly</a></div>
                    <div className = {this.state.frequency_unit === 'monthly'? 'pl-2 underline' : 'pl-2'} style = {{backgroundColor: this.state.frequency_unit === 'monthly' ? 'aliceblue' : ''}} onClick={this.handleSelectFrequencyUnit}><a href="#monthly">monthly</a></div>
                </div>
                <div className = "d-flex">{weekly_icons}</div>
                <p>Choose duration</p>
                <p>Choose the level of difficulty</p>
                <p>Write something down to motivate yourself</p>
            </div>
            )
    }
}

export default CreatePlan;