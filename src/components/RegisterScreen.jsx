import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegisterScreen.css';
import logo from '../assets/logo_toque-final-104h.png';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnpj, setCnpj] = useState('');

    return (
        <div className="register-page">

            <header className="register-header">
                <img
                    src={logo}
                    alt="logo toque final gesso"
                    className="company-logo"
                />
            </header>

            <main className="register-container">

                <form className="register-form">

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
                        <label htmlFor="cnpj">CNPJ</label>

                        <input
                            id="cnpj"
                            type="text"
                            placeholder="Digite o CNPJ da sua empresa"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
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
                        className="register-button"
                    >
                        Registrar
                    </button>

                </form>

            </main>

            <footer className="register-footer">
                <Link to="/">
                    Tem uma conta? Entre por aqui
                </Link>
            </footer>

        </div>
    );
}

export default Register;