import { createGlobalStyle } from "styled-components";
import email from "../Assets/email.svg";
import password from "../Assets/password.svg";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans';
    }
    html {
        height: 100%;
    }
    body {
        min-height: 100%;
        
    }
    #email{
        background-image: url(${email});
    }
    #password{
        background-image: url(${password});
    }
`;