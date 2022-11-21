import styled from "styled-components"
import UserContext from "../contexts/UserContext.js";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home () {

    const {token} = useContext(UserContext)
    const [nameUser, setNameUser] = useState('')
    const [listRegis, setListRegis] = useState([])
    const [saldo, setSaldo] = useState(0)
    

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

    useEffect(() => {
		let a = 0
        let b = 0
        listRegis.forEach(element => {
            if(element.type === "positive"){
                a = a + element.value
            }
            if(element.type === "negative"){
                b = b + element.value
            }
        });

        setSaldo(String((a - b).toFixed(2)).replace('.', ','))
	}, [listRegis]);

    


    return(
        <Central>
            <div className="box1">
                <div className="name">
                    <h1>Olá, {nameUser} </h1>
                    <Link to="/">
                        <ion-icon name="log-out-outline"></ion-icon>
                    </Link>
                    
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
                    <div className="saldo">
                        <p>SALDO</p>
                        <p>{saldo}</p>
                    </div>
                        
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

    .name{
        display: flex;
        justify-content: space-between;
        
    }

    ion-icon {
        font-size: 35px;
        color: white;
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
        height: 400px;
        padding-top: 23px;
    }

    .box {
        background-color: white;
        height: 446px;
        border-radius: 5px;
        
        padding-left: 12px;
        padding-right: 12px;
        
    }

    .saldo {
        display: flex;
        justify-content: space-between;
    }

    .saldo p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
        margin-top: 15px;
    }
    `