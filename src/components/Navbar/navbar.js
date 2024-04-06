import React from 'react'
import './navbar.css';
import logo from './areeba logo 1.jpg'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand lg fixed-top px-3 mb-3 ">
                <div className="container-fluid">
                    <img className='logo' src={logo} alt="Areeba Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav " >
                            <li className="nav-item ">
                                <a className="nav-link text-light " href="#header">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#portfolio">Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
