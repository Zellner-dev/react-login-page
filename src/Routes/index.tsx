import React from "react";
import {Routes as Switch, Route} from "react-router-dom";

import Login from "../Pages/Login";


const Routes : React.FC = () => (
    <>
        <Switch>
            <Route path="/" element={<Login/>}/>
        </Switch>
        <a href='https://www.freepik.com/photos/papyrus-texture'>Papyrus texture photo created by efe_madrid - www.freepik.com</a>
        <a href="https://storyset.com/animal">Animal illustrations by Storyset</a>
        <a href="http://www.freepik.com">Designed by starline / Freepik</a>
    </>
);

export default Routes;