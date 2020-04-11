import React from "react";
import ReactDOM from "react-dom";
import CategorySection from "../today/category_section.js";

class Plans extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <div class="wrapper d-flex">
            <div id = "success_message" className = "alert alert-success">
                The entry has been successfully created !
            </div>
            <div id= "sidebar">
            </div>
            <div className = "container-fluid">
                <a href = "#"><i id = "hamburger-menu" class="fas fa-bars fa-1x pt-2"></i></a>
                <h5 className = "float-right pr-4 pt-2">Item1</h5>
                <h5 className = "float-right pr-4 pt-2">Item2</h5>
                <h5 className = "float-right pr-4 pt-2">Item3</h5>
                <div id="main_container" class="mt-4">
                    <header>Create a plan</header>
                    <CategorySection></CategorySection>
                </div>
            </div>
        </div>
        )
    }
}

export default Plans;