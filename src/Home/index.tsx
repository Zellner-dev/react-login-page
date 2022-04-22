import React from "react";
import {Header, HeaderNameDiv,HeaderName} from "./style"
import code from "../Assets/code.svg";
const Home : React.FC = () => (
    <>
        <Header>
            <HeaderNameDiv>
                <img src={code}/>
                <HeaderName> Zellner </HeaderName>
            </HeaderNameDiv>
        </Header>
    </>
)

export default Home;