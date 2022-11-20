import styled from "styled-components"
import UserContext from "../contexts/UserContext.js";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

export default function Home () {

    const {token} = useContext(UserContext)
    const [nameUser, setNameUser] = useState('')
    const [listRegis, setListRegis] = useState([])

    useEffect(() => {
		const requisicao = axios.get("http://localhost:5000/regis", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao.then(res => {
			
            console.log(res.data)
            setNameUser(res.data.name)
            setListRegis(res.data.data)
            
            
            
		});
	}, [token]);

    return(
        <Central>
            <div className="box1">
                <div>
                    <h1>Olá, {nameUser} </h1>
                </div>
                
                <div className="box">
                    <div className="other">
                        {listRegis.map((m, key)=> <div key={key} className="regis">
                        <div>
                            <p>{m.date}</p>
                            <h2>{m.desc}</h2>
                        </div>
                        <span className={m.type}>{String((m.value).toFixed(2)).replace('.', ',')}</span>
                        </div>)}
                    </div>
                    <p>oi</p>
                    </div>
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
    }

    .regis {
        display: flex;
        justify-content: space-between;
        
        margin-bottom: 20px;
    }

    .regis div {
        display: flex;
        
    }

    .regis div p {
        margin-right: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }

    .regis div h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    .regis span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        
    }

    .negative {
        color: #C70000;
    }

    .positive {
        color: #03AC00;
    }

    .other {
        overflow-y: scroll;
        height: 380px;
    }

    .box {
        background-color: white;
        height: 446px;
        border-radius: 5px;
        padding-top: 23px;
        padding-left: 12px;
        padding-right: 12px;
        
    }
    `