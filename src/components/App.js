import Login from "./Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "../contexts/UserContext.js"
import { useState } from "react";
import Home from "./Home";
import Entrada from "./Entrada";

export default function App() {
    const [token, setToken] = useState("")
    

    return(
        <div>
            <BrowserRouter>
                <UserContext.Provider value={{token, setToken}}>

            
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/entrada" element={<Entrada/>} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
            
        </div>
    )
}