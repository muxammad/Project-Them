import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {

    const navItems = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Portfolio',
            link: '/portfolio',
        },
        {
            name: 'Contact',
            link: '/contact',
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg TM_Navbar">
            <div className="container-fluid">
                <a className="navbar-brand TM_Navbar_Brand" href="/#">
                    TM
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ms-4 mb-lg-0">
                        {navItems.map(e => (
                            <li key={e.name} className="nav-item TM_Navbar_Item mx-2 text-uppercase">
                                <Link to={e.link} className="nav-link TM_Navbar_Link" href="/#">{e.name}</Link>
                            </li>    
                        ))}
                    </ul>
                </div>
            </div>
        </nav>        
    )
}

export default Navbar
