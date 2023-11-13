import App from "./App.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react"

const RouteController = () => {

    const [user, setUser] = useState({
        "userID": "dhruv22",
        "password": "adminpas",
        "branch": "CSE",
        "programme": "BTECH"
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<App user={user} setUser={setUser} />} />
                <Route path="/collection" element={<App user={user} setUser={setUser} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteController