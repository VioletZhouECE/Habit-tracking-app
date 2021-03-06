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

            icon_selected: {"name":"code","description":"code", "color":"gray"},
            section_in_display: "most_frequently_used",
            time: "Enter time",
            unit : "hour",
            is_number: true,
            is_time_valid: true,
            is_time_empty: false,
            is_num_digit_valid: true,
            should_validate_empty: false,
            is_data_valid: true
        }

        //use this.baseState to store the init state
        this.baseState = this.state;

        //bind event handling methods to class component
        this.handleClickTab = this.handleClickTab.bind(this);
        this.handleSelectedIcon = this.handleSelectedIcon.bind(this);
        this.handleSelectTime = this.handleSelectTime.bind(this);
        this.handleSelectUnit = this.handleSelectUnit.bind(this);
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

    handleSelectedIcon(key,description,color){
        this.setState({icon_selected : {"name":key, "description" : description, "color":color}});
    }

    handleSelectTime(value){
        this.setState(prevState =>({time:prevState.time === "Enter time" ? '' : value }),()=>{this.validateTime()});
    }

    convertTimeUnit(previousUnit, value){
        if (previousUnit === "minute"){
            //convert minute to hour with a precision of one decimal places
            let hour = Math.round((value/60) * 10)/10;
            return hour
        } else {
            //covert hour to minute
            let minute = Math.round(value * 60)
            return minute
        }
    }

    handleSelectUnit(){
        //need to use prev state since we are using previous state to update current state
        this.setState(prevState => ({unit: prevState.unit === "hour"? "minute":"hour"}), function(){
            //need to use a callback here since state is not update immediately
            //do unit conversion for the previous input (if any)
            if (isNaN(this.state.time) || this.state.time === ''){
                //do not do conversion if time is not a number
                return;
            }

            if (this.state.unit === "hour"){
                const new_time = this.convertTimeUnit("minute", this.state.time)
                this.setState({time: new_time})
            } else {
                const new_time = this.convertTimeUnit("hour", this.state.time)
                this.setState({time: new_time})
            }
        })
    }

    //validate time section
    validateTime(callback=null){

        //we only need to validate empty data after the "create an entry" button is clicked
        if (this.state.should_validate_empty){
            if (this.state.time === '' || this.state.time === 0 || this.state.time === 'Enter time'){
                    this.setState ({is_time_empty : true});
                    //before we return, remove the "only numbers should be entered error message if there is one"
                    this.setState({is_number : true});
                    return;
                } else {
                    this.setState ({is_time_empty : false});
                }
            }

        //validate if only numbers are entered
        if (this.state.time === '' || this.state.time === "Enter time" || !isNaN(this.state.time)){
            this.setState({is_number : true})
        } else {
            this.setState({is_number : false})
            return;
        }

        //validate if time is valid
        if (this.state.unit === "hour"){
            //if unit is "hour"
            if (this.state.time === '' || (this.state.time >= 0 && this.state.time < 24)){
                this.setState ({is_time_valid: true})
                } else {
                this.setState ({is_time_valid : false})
                }
        } else {
            //if unit is "minute"
            if (this.state.time === '' || (this.state.time >= 0 && this.state.time < 1440)){
                this.setState ({is_time_valid : true})
            } else {
                this.setState ({is_time_valid : false})
            }
        }

        //validate if number is rounded to one decimal place
        if (this.state.time === '' || this.state.time * 10 === parseInt(this.state.time * 10)){
            //call the handleSubmitcallback after this validation is done
            this.setState ({is_num_digit_valid : true}, ()=>{typeof callback === "function" && callback()})
        } else {
            this.setState ({is_num_digit_valid : false})
        }
    }

    resetForm(){
        //reset/remount the component
        this.setState (this.baseState);
        //clear text on emojionearea
        $("#emoji-area").data("emojioneArea").setText('');
    }

    displaySuccessMessage(){
        $("#success_message").css("display", "inline");
        window.setTimeout(() => {
            $("#success_message").css("display", "none");
        }, 3000)
    }

    handleSubmit(){
        const submitCallback = function (){
            //if time is valid and time is not empty
            if (this.state.is_num_digit_valid){
                //retrieve text on emojionearea 
                var description = $("#emoji-area").data("emojioneArea").getText();
                //make an ajax call to sumbit the data
                console.log("make an ajax call");
                this.resetForm();
                this.displaySuccessMessage();
            }
        }.bind(this);

        this.setState({should_validate_empty : true}, () => {
        this.validateTime(submitCallback)});
    }

    render(){
        return (
            <div>
                <header>Create an Entry</header>
                    <nav className="container pt-3" style = {{height: "auto"}}>
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
                        <div style = {{display : this.state.is_number? "none" : "inline"}}>
                            <p className = "alert alert-danger">Only numbers should be entered</p>
                        </div>
                        <div style = {{display : this.state.is_num_digit_valid? "none" : "inline"}}>
                            <p className = "alert alert-danger">Please round time to one decimal place</p>
                        </div>
                        <div style = {{display : this.state.is_time_valid ? "none" : "inline"}}>
                            {this.state.unit === "hour" ? <p className = "alert alert-danger">Please enter a valid time: hour must be positive and smaller than 24</p> : <p className = "alert alert-danger">Please enter a valid time: minute must be positive and smaller than 1440</p>} 
                        </div>
                        <Time icon_selected = {this.state.icon_selected} value = {this.state.time} onSelectTime = {this.handleSelectTime} onSelectUnit = {this.handleSelectUnit} unit = {this.state.unit}></Time>
                    </div>
                    <div className = "container mt-2" id="description section">
                        <p> Write something down to celebrate what you have achieved: </p>
                        <textarea id = "emoji-area"></textarea>
                    </div>
                    <div className = "container mt-5">
                        <div style = {{width :"250px", margin : "auto"}}>
                            <button type= "button" className="btn-primary" style = {{width : "100%"}} onClick = {this.handleSubmit}>Create an entry</button>
                        </div>
                    </div>
                </div>
                )
    }
}

export default CategorySection