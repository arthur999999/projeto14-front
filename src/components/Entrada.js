import axios from "axios";
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import UserContext from "../contexts/UserContext.js";

export default function Entrada () {
    const {token} = useContext(UserContext)
    const [valor, setValor] = useState('')
    const [desc, setDesc] = useState('')

    const navigation = useNavigate()

    async function postEntrada () {

        

        try {
            await axios.post('http://localhost:5000/registro', {
                value: Number(valor.replace(',','.')),
                desc: desc,
                type: "positive"
            }, { headers: { Authorization: `Bearer ${token}` } })
            navigation('/home')

        } catch (error) {
            alert(error.response.data)
        }
    }

    return(
        <Central>
            <div className="box1">
                <div className="name">
                    <h1>Nova entrada</h1>
                </div>
                <input type="text" value={valor} onChange={e => setValor(e.target.value)} title='Coloque apenas numeros, com ou sem virgula. Ex: 250,49'  placeholder="Valor (ex: 250,49 ou 250)" />
                <input type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Descrição" />
                <button onClick={()=> postEntrada()}>Salvar entrada</button>
            </div>
        </Central>
    )
}

const Central = styled.div`
    * {
        box-sizing: border-box;
    }
    
    min-height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;

    .box1 {
        margin-top: 25px;
        width: 326px; 
    }

    .box1 h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 22px;
        margin-bottom: 40px;
    }

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
        height: 58px;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        background-color: #A328D6;
    }

    `