import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext.js";

export default function Login () {
    const { setToken} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function  loginUser () {

        const sendLogin = {
            email: email,
            password: password
        }

        try {
            const requisition = await axios.post("http://localhost:5000/login", sendLogin)
            setToken(requisition.data)
        } catch (error) {
            alert(error.response.data)
        }
        

    }

    return(
        <Center>
            <div className="box1">

                <h1>MyWallet</h1>
                <div>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" ></input>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"></input>
                    <button onClick={()=> loginUser()}>Entrar</button>
                </div>
                <p>Primeira vez? Cadastre-se!</p>
                
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
        margin-top: 159px;
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