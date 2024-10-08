import React from 'react';

function Nav() {
    return (
        <nav>
            <div className="logo">
                <a href="../index.html">
                    <img src="/assets/images/EventMateLogo.png" className="nav-icon" alt="EventMate Logo" />
                </a>
            </div>
            <ul className="nav-links">
                <li className="nav-item"><a href="../catering/catering.html">Catering</a></li>
                <li className="nav-item"><a href="../venues_home/venues_home.html">Venues</a></li>
                <li className="nav-item"><a href="../inmobiliario/inmobiliario.html">Mobiliario</a></li>
                <li className="nav-item"><a href="../planeador/planeador.html">Planeador</a></li>
                <li className="nav-item"><a href="../login_usuarios/login_usuario.html">Login</a></li>
                <li className="nav-item"><a href="../signup_clientes/signUpClientes.html">Sign Up</a></li>
                <li className="nav-item"><a href="../index_ingles.html" className="material-symbols-outlined">translate</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
