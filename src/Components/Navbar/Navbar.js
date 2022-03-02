import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
                <div className="container-fluid">
                    <NavLink to="" className="navbar-brand h5 text-white">Innovizia Techno </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">

                            <li className="nav-item">
                                <NavLink to="/form" className="nav-link text-white ">Form</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/table" className="nav-link text-white  ">Table</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;