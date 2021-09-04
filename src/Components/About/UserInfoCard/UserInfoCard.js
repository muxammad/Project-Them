import React from 'react'
import UserAvatar from './UserAvatar'

import './UserInfoCard.css'

function UserInfoCard() {
    
const SotIcons = [
    {
        name: 'facebook-f',
        link: '/#'
    },
    {
        name: 'instagram',
        link: '/#'
    },
    {
        name: 'twitter',
        link: '/#'
    },
    {
        name: 'vk',
        link: '/#'
    },
]

    return (
        <div className="card">
            <div className="card-body">
                <center className="TM_About_Avatar">
                    <UserAvatar size="150" />
                </center>
                <div className="d-flex flex-column text-center mt-3">
                    <span className="TM_About_Name">Arden Dean</span>
                    <span className="TM_About_Job_Info text-capitalize">creative designer</span>
                </div>
                <div className="TM_About_Info">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between TM_About_Info_List_Item">
                            <span>Residence</span>
                            <span>Canada</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between TM_About_Info_List_Item">
                            <span>City</span>
                            <span>Toronto</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between TM_About_Info_List_Item">
                            <span>Age</span>
                            <span>26</span>
                        </li>
                    </ul>
                </div>
                <div className="TM_About_Sot_Icons mt-3 mx-3 d-flex justify-content-around">
                    {SotIcons.map(e => (
                        <a href={e.link} className="TM_About_Sot_Icon" key={e.name}>
                            <i className={`fa fa-${e.name}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
                
    )
}

export default UserInfoCard
