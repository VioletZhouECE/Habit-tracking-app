import React from "react";
import ReactDOM from "react-dom";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import AllIcons from '../../scripts/fontawesome_icons';
import Duration from './duration';

const icon_colors = [
    ["grey", "gainsboro", "grey", "bluegrey"],
    ["blue", "rgb(163, 212, 255)", "dodgerblue", "lightblue"],
    ["pink", "lightpink", "#ff1a75", "pink"],
    ["orange", "rgb(247, 211, 104)" , "orange", "orange"],
    ["teal", "turquoise", "teal", "teal"]
]

class CreatePlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            theme : "bluegrey",
            icon :'fas fa-image',
            selected_icon_color : "grey",
            tags: [],
            frequency_unit: "weekly",
            selected_frequency: '',
            duration_unit: 'month',
            duration : 'Click tab to switch unit to week',
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSelectIcon = this.handleSelectIcon.bind(this);
        this.handleSelectColor = this.handleSelectColor.bind(this);
        this.handleSelectFrequencyUnit = this.handleSelectFrequencyUnit.bind(this);
        this.handleSelectFrequency = this.handleSelectFrequency.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleSelectDurationUnit = this.handleSelectDurationUnit.bind(this);
    }
    
    componentDidMount(){
        $('.add-tag').dropdown({
            template : function(r){ return "<li><a>"+r.text+"</a></li>";},
            buttons : [{text:'work'}, {text:'study'}, {text:'health'},{text:'personality'}, {text:'beauty'}, {text:'mindset'}]
        })
    }

    handleChangeName(e){
        this.setState({name : e.target.value});
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

    handleSelectFrequency(day){

        //"toggle" the day
        this.setState((prevState) => {
            if (prevState.selected_frequency.includes(day)){
                return {selected_frequency : prevState.selected_frequency.replace(day.toString(), '')};
            } else {
                return {selected_frequency : prevState.selected_frequency + day.toString()};
            }
        })
    }

    handleChangeDuration(value){
        this.setState(prevState => {
            if (prevState.duration === 'Click tab to switch unit to week'){
                return {duration: ''};
            } else {
                return {duration : value};
            }
        });
    }

    handleSelectDurationUnit(){
        //toggle unit
        this.setState(prevState => {
            if (prevState.duration_unit === 'month'){
                return {duration_unit: 'week'};
            } else {
                return {duration_unit : 'month'};
            }
        })

        //empty duration field
        this.setState({duration : ''});
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
                <span key = {i} className = "fa fa-stack" onClick = {(e)=>{
                    this.handleSelectFrequency(e.target.innerText);
                }}>
                    <i key = {"circle" + i} className = "fas fa-circle fa-stack-2x pr-2"  style = {{color : this.state.frequency_unit === 'weekly' && this.state.selected_frequency.includes(i.toString())? "dodgerblue" : "rgb(163,212,255)"}}></i>
                    <span key = {"number" + i} className="fa fa-stack-1x pr-2" style={{color:"white"}}>{i}</span>
                </span>
            );
        }

        var monthly = <div id = "monthly-frequency" className = "d-flex">
                        <input className = 'pr-3 mr-3' placeholder = '1'></input>
                        <p className = 'pt-3 pb-0 mb-0'>time(s) per month</p>
                      </div>

        return (
            <div className = "create-a-plan container">
                <div className='d-flex'>
                    <div className='pr-5 col-sm-3 col-md-3 col-lg-3 text-center'>
                        <span className='fas fa-stack fa-3x'>
                            <i className="far fa-circle fa-stack-2x"></i>
                            <i className={this.state.icon + " fa-stack-1x"}></i>
                        </span>
                        <p className='ml-3 pt-1'>{this.state.name}</p>
                    </div>
                    <div className='pl-5 col-sm-6 col-md-6 col-lg-6'>
                        <p className="pl-1">Name your habit:</p>
                        <input className= "habit-name" value={this.state.name} onChange={this.handleChangeName}></input>
                    </div>
                </div>
                <div className="d-flex pt-2 pb-4">
                    <div className="icon-selection col-sm-3 col-md-3 col-lg-3">
                        <p> Pick an icon: </p>
                        <FontIconPicker icons={AllIcons} value={this.state.icon} onChange={this.handleSelectIcon} theme={this.state.theme}></FontIconPicker>
                    </div>
                    <div className="icon-color-selection col-sm-6 col-md-6 col-lg-6 pl-5">
                        <p> Pick a color: </p>
                        <div className="d-flex pt-3">
                            <div>{color_palette}</div>
                        </div>
                    </div>
                </div>
                <div className='pb-4'>
                    <p className='d-flex'>Add a tag</p>
                    <span><i className='fas fa-plus add-tag'></i></span>
                </div>
                <div className = "d-flex pb-2">
                <p className = 'pr-4 pb-0 mb-0'>Choose a frequency</p> 
                <div className = 'd-flex'></div>
                    <div className = {this.state.frequency_unit === 'weekly'? 'underline' : ''}  onClick={this.handleSelectFrequencyUnit}><a href="#weekly">weekly</a></div>
                    <div className = {this.state.frequency_unit === 'monthly'? 'pl-2 underline' : 'pl-2'} onClick={this.handleSelectFrequencyUnit}><a href="#monthly">monthly</a></div>
                </div>
                <div className = "d-flex pb-4">{this.state.frequency_unit === "weekly"? weekly_icons : monthly}</div>
                <p className = 'pb-1'>Enter duration: </p>
                <div>
                    <Duration value={this.state.duration} unit={this.state.duration_unit} onChangeDuration={this.handleChangeDuration} onSelectUnit={this.handleSelectDurationUnit}>Choose duration</Duration>
                </div>
                <p>Choose the level of difficulty</p>
                <p>Write something down to motivate yourself</p>
            </div>
            )
    }
}

export default CreatePlan;