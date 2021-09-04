import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UserInfoCard from './UserInfoCard/UserInfoCard'
import TextCenter from './TextCenter/TextCenter'
import Skills from './Skills/Skills'

import './About.css'
import Testimonals from './Testimonals/Testimonals'
import FunFacts from './FunFacts/FunFacts'

function About() {
    return (
        <div className="container TM_About py-4">
            <div className="row">
                <div className="col-3">
                    <UserInfoCard />
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <TextCenter />
                            <Skills />
                            <Testimonals />
                            <FunFacts />
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
