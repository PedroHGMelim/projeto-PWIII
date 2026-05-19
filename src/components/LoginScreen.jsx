import React, { useState, useEffect } from 'react';
import logo from '../assets/logo_toque-final-104h.png';
import { Link } from 'react-router-dom';
import '../styles/LoginScreen.css';

function Login() {
    const [email, setEmail] = useState(() => {
        const emailSalvo = localStorage.getItem('emailSalvo');
        return emailSalvo ? JSON.parse(emailSalvo) : '';
    });

    const [password, setPassword] = useState('');

    useEffect(() => {
        localStorage.setItem('emailSalvo', JSON.stringify(email));
    }, [email]);

    return (
        <div className="login-page">

            <header className="login-header">
                <img
                    src={logo}
                    alt="logo toque final gesso"
                    className="company-logo"
                />
            </header>

            <main className="login-container">

                <form className="login-form">

                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Entrar
                    </button>

                </form>

            </main>

            <footer className="login-footer">
                <Link to="/Register">
                    Não tem uma conta? Registre-se aqui
                </Link>
            </footer>

        </div>
    );
}

export default Login;