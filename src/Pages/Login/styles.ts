import styled from 'styled-components';
import texture from "../../Assets/texture.jpg";

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    width: 100%;
    height: 100%;

    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236200ff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    
`
export const Linear = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(95deg, #ffffff00 54%, #c09de3 46%);
    width: 100%;
    height: 100%;

    position:absolute;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    width: 90%;
    height: 90%;
    border-radius: 1%;
    background-color: #00000000;
    box-shadow: 0px 0px 20px #1c1c1c30;
    backdrop-filter: blur( 2.5px );
`

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 100%;
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40%;
    height: 100%;
`

export const Svg = styled.img`
    cursor: pointer;

    width: 80%
    height: 80%;
    transition: 0.6s;
    margin-right: 15%;

    filter:drop-shadow(10px 10px 10px #00000050);

    &:hover{
        transform: scale(0.8);
        filter:drop-shadow(5px 5px 5px #000);
        cursor: pointer;
    }
`

export const Title = styled.h1`
    color: #c09de3;
`

export const Input = styled.input`
    outline: none;
    background-position-y: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    -moz-box-sizing: border-box;

    background-size: 8%;
    background-position-x: 98%;
    width: 70%;
    height: 6%;
    margin: 1%;
    border-radius: 10px;
    padding: 0 2%;
    font-size: 110%;
    transition: 0.6s;

    border:solid 2px #c09de3;
    background-color: #fff;
    color: #8328bf;
    &:hover{
        background-color: #c09de3;
        ::placeholder{
            color: #fff;
        }
        color: #fff;
    }
    &:focus{
        background-color: #c09de3;
        ::placeholder{
            color: #fff;
        }
        color: #fff;
    }
    ::placeholder{
        color: #c09de3;
    }
`

export const Recuperar = styled.div`
    width: 68%;
    height: 4%;
`
export const A = styled.a`
    cursor: pointer;
    text-decoration: underline;

    font-weight: 700;
    width:100px;
    height: 100px;
    transition: 0.6s;
    color: #8328bf;

    &:hover{
        color: #c09de3;
    }
`

export const Logar = styled.button`
    cursor: pointer;

    width: 70%;
    height: 6%;
    margin: 1%;
    border-radius: 10px;
    transition: 0.6s;
    font-weight: 700;
    font-size: 120%;
    
    background-color: #c09de3;
    border:solid 2px #c09de3;
    color: #8328bf;

    &:hover{
        background-color: #fff;
    }
`
export const Cadastrar = styled.button`
    cursor: pointer;

    width: 70%;
    height: 6%;
    margin: 1%;
    border-radius: 10px;
    transition: 0.6s;
    font-weight: 700;
    font-size: 120%;
    
    background-color: #d96289;
    border:solid 2px #d96289;
    color: #fff;

    &:hover{
        background-color: #fff;
        color: #d96289;
    }
`