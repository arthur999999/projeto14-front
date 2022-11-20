import styled from "styled-components";
import axios from "axios";

export default function Login () {

    function login () {
        axios.post("http://localhost:5000/")
    }

    return(
        <Center>
            <div className="box1">

                <h1>MyWallet</h1>
                <div>
                    <input type="text" placeholder="E-mail" ></input>
                    <input type="password" placeholder="Senha"></input>
                    <button>Entrar</button>
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
    
    background-color: #8C11BE;
    height: 100vh;
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