import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

function Login() {
    const [ email, setEmailLog ] = useState("");
    const [ password, setPasswordLog ] = useState("");
    const [ flag, setFlag ] = useState(false);
    const [ home, setHome ] = useState(true);


    function handleLogin(e) {
        e.preventDefault();

        let correo = localStorage.getItem("Correo").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");

        if (!email || !password) {
            setFlag(true);
            alert("Vacio");
        } else {
            if (password !== pass || email !== correo) {
                setFlag(true);
            } else {
                setHome(!home);
                setFlag(false);
            }
        }
    }

    return (
        <div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <h1>Log in</h1>
                    <div className="form-group">
                        <label>Email </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese su Email"
                            onChange={(e) => setEmailLog(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ingrese su Password"
                            onChange={(e) => setPasswordLog(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">
                        Ingresar
                    </button>

                    {flag && (
                        <Alert color="primary" variant="warning" className="alerta">
                            Por favor ingrese la información correcta
                        </Alert>
                    )}
                </form>

            ) : (
                <Home />
            )}

        </div>
    );
}

export default Login;
