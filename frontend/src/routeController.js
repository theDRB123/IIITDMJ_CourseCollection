import App from "./App.js"
import LandingPage from "./landingPage.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react"

const RouteController = () => {

    const [user, setUser] = useState({
        "userID": "",
        "password": "",
        "branch": "CSE",
        "programme": "BTECH"
    });

    const [login, setLogin] = useState(false)
    
    return (
        <>
            <LandingPage user={user} setUser={setUser} login={login} setLogin={setLogin}/>
            <App user={user} setUser={setUser} login={login} setLogin={setLogin} />
        </>
    )
}

export default RouteController