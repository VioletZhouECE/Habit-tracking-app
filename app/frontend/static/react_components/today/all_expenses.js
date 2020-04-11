import React from "react";
import ReactDOM from "react-dom";

class AllExpenses extends React.Component{
    constructor(props){
        super(props)
        this.self = this
        this.state = {
            selected: ""
        }

        //bind handleMouseLeave event listener
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount(){
        //set up jquery event listener for all icons and icon descriptions
        self = this
        $(".icon_class span, .icon_class p").on('mouseover click',function(e){
            if (e.type == "click"){
                //pass information to the parent element
                let name = e.target.id
                self.props.onSelectedIcon(name)
                self.setState({selected: name})
                //remove effect on other icons 
                e.target.parentElement.parentElement.parentElement.querySelectorAll("span").forEach((icon)=>{
                    if (icon.id != name && icon.classList.contains("fa-4x")){
                        icon.classList.remove("fa-4x")
                        icon.classList.add("fa-3x")
                    }
                })
            } else { // when event type is mouseover
                let target =  e.target.parentElement.parentElement.querySelector("span")
                target.classList.remove('fa-3x')
                target.classList.add('fa-4x')
            }
        })
    }

    handleMouseLeave(e){
        if (this.state.selected === e.target.id){
            return
        } else {
            let target =  e.target.parentElement.parentElement.querySelector("span")
            target.classList.remove('fa-4x')
            target.classList.add('fa-3x')
        } 
    }

    render(){
        return(
            <div className= "container d-flex flex-wrap mt-4">
            {this.props.lst_of_icons.map((icon) =>
                <li className = "col-sm-3 col-md-3 col-lg-3 d-flex flex-wrap icon_class" key = {icon["name"].toString()}>
                    <div className = "col-sm-12 col-md-12 col-lg-12">
                        <span style= {{color:icon["color"].toString()}} className= {"fa fa-3x fa-" + icon["name"].toString()}
                        id = {icon["name"].toString()} onMouseLeave = {(e)=>this.handleMouseLeave(e)}> </span>
                    </div>
                    <div className = "col-sm-12 col-md-12 col-lg-12">
                        <p className = "col-sm-8 col-md-8 col-lg-8 px-0" id = {icon["name"].toString()} 
                        onMouseLeave = {(e)=>this.handleMouseLeave(e)}>{icon["description"].toString()}</p>
                    </div>
                </li>
                )}
            </div>
        ) 
    }
}

export default AllExpenses