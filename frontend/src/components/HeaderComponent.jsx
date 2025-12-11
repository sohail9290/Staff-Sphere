import React from 'react'

import { NavLink } from 'react-router-dom';

const logo = "/staff-sphere-logo.svg";
const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "40px", height: "40px", marginRight: "10px" }}
                        />
                        Staff Sphere
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/employees' className="nav-link">Employees</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/departments' className="nav-link">Departments</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;
