import React from "react";
import ReactDOM from "react-dom";
import MostFrequentlyUsed from "./most_frequently_used"
import AllIncomes from "./all_incomes"
import AllExpenses from "./all_expenses"
import Time from "./time"

class CategorySection extends React.Component{
    constructor(props){
        super(props)
        //init state
        self = this;
        this.state = {
            most_frequently_used: true,
            all_incomes:false,
            all_expenses:false,
            //to-do: need to retrieve 8 icons from local storage 
            //data: a list of (list of objects)- representing individual icon
            most_frequently_used_icons: [{"name":"code","description":"code","color":"gray"}, {"name":"book","description": "read", "color":"blue"}, 
            {"name":"users", "description":"be with family", "color":"tomato"}, {"name":"guitar", "description":"develop a hobby", "color":"violet"},
              {"name":"book-reader","description":"study", "color":"blue"}, {"name":"hands-helping", "description": "help others", "color":"green"}, 
              {"name":"home", "description": "do chores", "color":"black"}, {"name":"running", "description":"workout", "color":"darkgray"}],

            //to:do need to retrieve the progress of each icon from local storage 
            all_incomes_icons: [{"name":"code","description":"code"}, {"name":"book","description": "read"}, 
            {"name":"users", "description":"be with family"}, {"name":"guitar", "description":"develop a hobby"},
              {"name":"book-reader","description":"study"}, {"name":"hands-helping", "description": "help others"}, 
              {"name":"home", "description": "do chores"}, {"name":"running", "description":"workout"}],

            //to-do: need to retrieve the progress of each icon from local storage 
            all_expenses_icons: [{"name":"code","description":"code"}, {"name":"book","description": "read"}, 
            {"name":"users", "description":"be with family"}, {"name":"guitar", "description":"develop a hobby"},
              {"name":"book-reader","description":"study"}, {"name":"hands-helping", "description": "help others"}, 
              {"name":"home", "description": "do chores"}, {"name":"running", "description":"workout"}],

            icon_selected: {"name":"code","color":"gray"},
            section_in_display: "most_frequently_used",
            time: "Enter time",
            unit : "hour",
            is_time_valid: true,
            is_time_empty: false,
            should_validate_empty: false,
            is_data_valid: true
        }

        //bind event handling methods to class component
        this.handleClickTab = this.handleClickTab.bind(this);
        this.handleSelectedIcon = this.handleSelectedIcon.bind(this);
        this.handleSelectTime = this.handleSelectTime.bind(this);
        this.handleSelectUnit = this.handleSelectUnit.bind(this);
        this.handleClickTextarea = this.handleClickTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateTime = this.validateTime.bind(this);
    }

    componentDidMount(){
        $("#emoji-area").emojioneArea(
            {
                autocomplete: false,
                pickerPosition: "bottom" 
            }
        );
    }

    handleClickTab(eventTextContent){
        console.log(eventTextContent);
        switch(eventTextContent){
            case "Most frequently used":
            this.setState({most_frequently_used: true,
                all_incomes:false,
                all_expenses:false}
                )
            break;
            
            case "All income":
            this.setState({most_frequently_used: false,
                all_incomes:true,
                all_expenses:false}
                )
            break;

            case "All expenses":
            this.setState({most_frequently_used: false,
                all_incomes:false,
                all_expenses:true})
            break;
        }
    }

    handleSelectedIcon(key,color){
        this.setState({icon_selected : {"name":key, "color":color}});
        console.log(this.state.icon_selected["name"]);
    }

    handleSelectTime(value){
        this.setState(prevState =>({time:prevState.time === "Enter time" ? '' : value }),()=>{this.validateTime()});
    }

    convertTimeUnit(previousUnit, value){
        if (previousUnit === "minute"){
            //convert minute to hour with a precision of two decimal places
            let hour = Math.round((value/60) * 100)/100;
            console.log(`hour is ${hour}`);
            return hour
        } else {
            //covert hour to minute
            let minute = Math.round(value * 60)
            return minute
        }
    }

    handleSelectUnit(){
        //need to use prev state since we are using previous state to update current state
        this.setState(prevState => ({unit: prevState.unit == "hour"? "minute":"hour"}), function(){
            //need to use a callback here since state is not update immediately
            console.log(this.state.unit)
            //do unit conversion for the previous input (if any)
            if (this.state.unit == "hour"){
                const new_time = this.convertTimeUnit("minute", this.state.time)
                console.log(`new time is ${new_time}`)
                this.setState({time: new_time})
            } else {
                const new_time = this.convertTimeUnit("hour", this.state.time)
                console.log(`new time is ${new_time}`)
                this.setState({time: new_time})
            }
        })
    }

    handleClickTextarea(){
        this.setState({should_validate_empty : true}, () => {this.validateTime()});
    }

    //validate time section
    validateTime(callback=null){
        //we only need to validate empty data after the "create an entry" button is clicked
        if (this.state.should_validate_empty){
            if (this.state.time === '' || this.state.time === 0 || this.state.time === 'Enter time'){
                this.setState ({is_time_empty : true}, ()=>{
                    typeof callback === "function" && callback})
                    return;
                } else {
                    this.setState ({is_time_empty : false}, ()=>{
                        typeof callback === "function" && callback})
                }
            }

        if (this.state.unit === "hour"){
            //if unit is "hour", number should be rounded to 1 decimal place
            if (this.state.time*10 === parseInt(this.state.time*10)){
                this.setState ({is_time_valid : true}, ()=>{typeof callback === "function" && callback})
                } else {
                this.setState ({is_time_valid : false}, ()=>{
                    typeof callback === "function" && callback})
                }
        } else {
            //if unit is "minute", number should be an integer
            if (this.state.time%1 === 0){
                console.log("time is valid");
                this.setState ({is_time_valid : true}, ()=>{typeof callback === "function" && callback})
            } else {
                console.log("time is not valid");
                this.setState ({is_time_valid : false}, ()=>{typeof callback === "function" && callback})
            }
        }
    }

    handleSubmit(){
        const submitCallback = function (){
            //if time is valid and time is not empty
            if (this.state.is_time_valid && !this.state.is_time_empty){
                //make an ajax call to sumbit the data
                console.log("make an ajax call")
            }
        }.bind(this);

        this.setState({should_validate_empty : true}, () => {
            this.validateTime(submitCallback)});
    }

    render(){
        return (
                <div>
                    <nav className="container">
                        <ul className="nav nav-tabs text-center">
                            <li className = "col-sm-4 col-md-4 col-lg-4" style = {{backgroundColor: this.state.most_frequently_used ? 'blue' : 'aliceblue'}}>
                            <a href = "#most_frequently_used" style = {{color: this.state.most_frequently_used ? 'white':'blue'}}>Most frequently used</a></li>
                            <li className = "col-sm-4 col-md-4 col-lg-4" style = {{backgroundColor: this.state.all_incomes ? 'blue' : 'aliceblue'}}>
                            <a href = "#all_income" style = {{color: this.state.all_incomes ? 'white':'blue'}} onClick={(e)=>this.handleClickTab(e.target.innerText)}>All income</a></li>
                            <li className = "col-sm-4 col-md-4 col-lg-4" style = {{backgroundColor: this.state.all_expenses ? 'blue' : 'aliceblue'}}>
                            <a href = "#all_expenses" style = {{color: this.state.all_expenses ? 'white':'blue'}} onClick={(e)=>this.handleClickTab(e.target.innerText)}>All expenses</a></li> 
                        </ul>
                        <div className="container" id="icon_section">
                        {this.state.most_frequently_used && <MostFrequentlyUsed lst_of_icons = {this.state.most_frequently_used_icons} onSelectedIcon = {this.handleSelectedIcon}></MostFrequentlyUsed>}
                        {this.state.all_incomes && <AllIncomes lst_of_icons = {this.state.all_incomes_icons} onSelectedIcon = {this.handleSelectedIcon}></AllIncomes>}
                        {this.state.all_expenses && <AllExpenses lst_of_icons = {this.state.all_expenses_icons} onSelectedIcon = {this.handleSelectedIcon}></AllExpenses>}
                        </div>
                    </nav>
                    <div className = "container" id="time section">
                    <div style = {{display : this.state.is_time_empty? "inline" : "none"}}>
                        <p className = "alert alert-danger">Time cannot be empty</p>
                    </div>
                    <div style = {{display : this.state.is_time_valid ? "none" : "inline"}}>
                        {this.state.unit === "hour" ? <p className = "alert alert-danger">Please round hour to one decimal place.</p> : <p className = "alert alert-danger">Please round minute to an integer</p>} 
                    </div>
                    <Time icon_selected = {this.state.icon_selected} value = {this.state.time} onSelectTime = {this.handleSelectTime} onSelectUnit = {this.handleSelectUnit} unit = {this.state.unit}></Time>
                    </div>
                    <p> Write something done to celebrate what you have achieved: </p>
                    <textarea id = "emoji-area" onChange = {this.handleClicktextarea}></textarea>
                    <button className="btn-primary" onClick = {this.handleSubmit}>Create task entry</button>
                </div>
                )
    }
}

export default CategorySection