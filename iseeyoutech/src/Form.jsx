import React, { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const checkUser = async () => {
        try {
            const response = await fetch(`http://localhost:3001/users`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Hola',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const users = await response.json();
                const user = users.find(u => u.email === email && u.password === password); // Verifica si existe el usuario

                if (user) {
                    setMessage('Accediendo'); // Mensaje si coincide el usuario
                } else {
                    setMessage('Usuario no encontrado'); // Mensaje si no coincide
                }
            } else {
                setMessage('Error al obtener usuarios'); // Manejo de errores
            }
        } catch (error) {
            console.error('Error de red:', error);
            setMessage('Error de red, por favor intenta de nuevo');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Acceder</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
