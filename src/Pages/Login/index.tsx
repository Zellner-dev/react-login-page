import React from "react";
import { Box, Linear, Container, Inputs, Image, Svg, Title, Input, Recuperar, A, Logar, Cadastrar} from "./styles";
import login from "../../Assets/login.svg";

const Login : React.FC = () => (
    <>
        <Box>
            <Linear>
                <Container>
                    <Inputs>
                        <Title>
                            LOGIN
                        </Title>
                        <Input id="email" placeholder="E-mail" type="email"/>
                        <Input id="password" placeholder="Senha" type="password"/>
                        <Recuperar>
                            <A>Esqueceu a senha?</A>
                        </Recuperar>
                        <Logar>CONECTAR</Logar>
                        <Cadastrar>CADASTRAR-SE</Cadastrar>
                    </Inputs>
                    <Image>
                        <Svg src={login}/>
                    </Image>
                </Container>
            </Linear>
        </Box>
    </>
)

export default Login;