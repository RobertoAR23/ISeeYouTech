import React, { useState } from 'react';
import './CallApi.css';

export default function CallApi() {
    const [count, setCount] = useState(0);
    const [apiResponse, setApiResponse] = useState("");

    const handleClick = async () => {
        setCount(count + 1);
        try {
            const response = await fetch("/api/hello");
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            setApiResponse(data.name);
        } catch (error) {
            console.error("Error al llamar la API:", error);
            setApiResponse("Error al obtener datos");
        }
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">LOGO</div>
                <button className="signin-btn">Sign In</button>
            </nav>
            <div className="content">
                <h1>Presiona un botón y haz la prueba</h1>
                <button className="request-btn" onClick={handleClick}>
                    Solicitar
                </button>
                <p>Llegó: {apiResponse}</p>
                <p>Se ha presionado: {count} veces</p>
            </div>
        </div>
    );
}
