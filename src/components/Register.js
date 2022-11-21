import styled from "styled-components";
import axios from "axios";
import {  useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Register () {
    
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const navigation = useNavigate()

    async function  registerUser () {

        const sendRegister = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        try {
             await axios.post("http://localhost:5000/register", sendRegister)

            navigation('/')
            
        } catch (error) {
            alert(error.response.data)
        }
        

    }

    return(
        <Center>
            <div className="box1">

                <h1>MyWallet</h1>
                <div>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" ></input>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" ></input>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"></input>
                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" ></input>
                    <button onClick={()=> registerUser()}>Cadastrar</button>
                </div>
                <Link to="/">
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
                
                
            </div>
        </Center>
    )
}

const Center = styled.div`
    * {
        box-sizing: border-box;
    }
    
    min-height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: none;
    }

    .box1 div {

        display: flex;
        flex-direction: column;
        
        input {
            width: 326px;
            height: 58px;
            border-radius: 5px;
            margin-bottom: 13px;
            border: none;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            padding-left: 15px;
        }

        button {
            width: 326px;
            height: 46px;
            background: #A328D6;
            border-radius: 5px;
            border: none;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;

            color: #FFFFFF;
            margin-bottom: 36px;
        }
    }

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-bottom: 36px;
    }

    .box1 {
        margin-top: 95px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font: 400 32px 'Saira Stencil One', sans-serif;
        color: white;
        margin-bottom: 24px;
    }
`