import React from "react";
import ReactDOM from "react-dom";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

const icon_colors = [
    ["grey", "gainsboro", "grey", "bluegrey"],
    ["blue", "lightblue", "dodgerblue", "lightblue"],
    ["pink", "lightpink", "#ff1a75", "pink"],
    ["orange", "rgba(255, 191, 0)" , "orange", "orange"],
    ["teal", "turquoise", "teal", "teal"]
]

class CreatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme : "bluegrey",
            icon :'fipicon-angle-left',
            selected_icon_color : "grey"
        }

        this.handleSelectIcon = this.handleSelectIcon.bind(this);
        this.handleSelectColor = this.handleSelectColor.bind(this);
    }

    handleSelectIcon(selected_icon){
        this.setState({icon : selected_icon});
    }

    handleSelectColor(selected_color){  
        console.log(selected_color);
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

        var selected_theme; 
        //change theme 
        this.setState ({theme : selected_theme});
    }

    render(){
        var color_palette = [];
        icon_colors.forEach((color)=>{
            //study note: you cannot access key from the child component or through e.target.key
            //you have to use another cutsom html attribute or props to access the key
            color_palette.push(<span><i key = {color[0]} className="fas fa-circle fa-2x" style={{color: this.state.selected_icon_color === color[0]? color[2] : color[1]}} onClick={(e)=>this.handleSelectColor(e.target.style.color)}></i></span>);
        })

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
                            <div>{color_palette}</div>
                        </div>
                    </div>
                </div>
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