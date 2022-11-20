import Login from "./Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "../contexts/UserContext.js"
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState("")

    return(
        <div>
            <BrowserRouter>
                <UserContext.Provider value={{token, setToken}}>

            
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
            
        </div>
    )
}