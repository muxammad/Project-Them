import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Home.css'

function Home() {
    return (
        <div className="container TM_Home">
            <Navbar />
            <div className="d-flex flex-column h-100 justify-content-center mx-3 TM_Home_Text">
                <span className="text-uppercase TM_Home_Text_footer">Hello</span>
                <h1 className="text-capitalize TM_Home_Name">I'm Django</h1>
                <p>Freelance Visual Designer &amp; Love<br/>to watch Movie</p>
                <button className="btn btn-default text-capitalize text-white TM_Home_btn">hire me</button>
            </div>
        </div>
    )
}

export default Home
