import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Login from './Login';

function Registracion() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [celular, setCelular] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        if (!nombre || !correo || !password || !celular) {
            setFlag(true);
        } else {
            setFlag(false);

            localStorage.setItem("Correo", JSON.stringify(correo));
            localStorage.setItem("Password", JSON.stringify(password));
            localStorage.setItem("Nombre", JSON.stringify(nombre));
            localStorage.setItem("Celular", JSON.stringify(celular));
            alert("Datos Guardados");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <div className='cont'>
            {login ? (
                <form onSubmit={handleSubmit}>
                    <h1>Registrar</h1>
                    <div className='form-group'>
                        <label>Nombre </label>
                        <input type='text' className='form-control'
                            placeholder='Ingrese su Nombre'
                            onChange={(e) => setNombre(e.target.value)}
                        />

                    </div>
                    <div className='form-group'>
                        <label>Email </label>
                        <input type='email' className='form-control'
                            placeholder='Ingrese su Correo'
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password </label>
                        <input type='password' className='form-control'
                            placeholder='Ingrese su Clave'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Celular </label>
                        <input type='phone' className='form-control'
                            placeholder='Ingrese el Numero de Contacto'
                            onChange={(e) => setCelular(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Registrar</button>

                    <p onClick={handleClick} className='forgot-password text-right'>
                        Usuario registrado? {" "}Inicie Sesión
                    </p>
                    
                    {flag && (
                        <Alert color="primary" variant="danger">
                            Por favor ingrese los campos correspondientes
                        </Alert>
                    )}
                </form>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default Registracion;