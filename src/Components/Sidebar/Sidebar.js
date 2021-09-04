import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'
import UserAvatar from '../About/UserInfoCard/UserAvatar'

function Sidebar() {

    const Icons = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'briefcase',
            link: '/portfolio'
        },
        {
            name: 'id-card',
            link: '/contak'
        },
    ]

    return (
        <ul className="list-group d-flex align-items-center">
            <Link to="/about">
                <li className="list-group-item border-0 my-1 TM_Sidebar_Item-Avatar">
                        <UserAvatar size="30" />
                </li>
            </Link>
            {Icons.map((icon => (
                <Link to={icon.link} key={icon.name}>
                    <li className="list-group-item list-group-flush border-0 my-2 TM_Sidebar_Item">
                        <i className={`fa fa-${icon.name}`}></i>
                    </li>
                </Link>
            )))}
        </ul>
    )
}

export default Sidebar
