import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import MainPage from "../react_components/main_page"

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={MainPage}></Route>
        </div>
    </BrowserRouter>,
document.getElementById("root"))

