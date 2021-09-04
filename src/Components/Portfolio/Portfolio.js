import React, { useState } from 'react'
import UserInfoCard from '../About/UserInfoCard/UserInfoCard'
import Sidebar from '../Sidebar/Sidebar'

import './Portfolio.css'

function Portfolio() {
    const BtnTyps = [
        {name: 'all'},
        {name: 'video'},
        {name: 'music'},
        {name: 'link'},
        {name: 'image'},
        {name: 'gallery'},
        {name: 'content'},
    ]

    const images = [
        {id: '1', tag:"music", imageSrc: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '2', tag:"video", imageSrc: 'https://images.unsplash.com/photo-1630524233940-8fda17e3d190?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '3', tag:"interior", imageSrc: 'https://images.unsplash.com/photo-1630523628169-0e0863cdf69a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '4', tag:"video", imageSrc:'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '5', tag:"video", imageSrc: 'https://images.unsplash.com/photo-1630570000756-16dc154dc229?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '6', tag:"music", imageSrc: 'https://images.unsplash.com/photo-1606788075765-42f69501a452?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'},
        {id: '7', tag:"music", imageSrc: 'https://images.unsplash.com/photo-1630673271171-a81cd9137120?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '8', tag:"music", imageSrc: 'https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '9', tag:"music", imageSrc: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '10', tag:"link", imageSrc: 'https://images.unsplash.com/photo-1630692929609-1fbfb477602e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '11', tag:"link", imageSrc: 'https://images.unsplash.com/photo-1630737366822-30e8442986ad?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '12', tag:"link", imageSrc: 'https://images.unsplash.com/photo-1630709287830-9c75f25a58ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '13', tag:"image", imageSrc: 'https://images.unsplash.com/photo-1630679873193-cf659677e686?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '14', tag:"image", imageSrc: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '15', tag:"image", imageSrc: 'https://images.unsplash.com/photo-1630370447947-fdbcd7734813?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '16', tag:"gallery", imageSrc: 'https://images.unsplash.com/photo-1630370448230-300c2b577b3a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '17', tag:"gallery", imageSrc: 'https://images.unsplash.com/photo-1630688231121-a67484f86413?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '18', tag:"gallery", imageSrc: 'https://images.unsplash.com/photo-1630370448217-c12a2889439e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '19', tag:"content", imageSrc: 'https://images.unsplash.com/photo-1606787620651-3f8e15e00662?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '20', tag:"content", imageSrc: 'https://images.unsplash.com/photo-1630371251489-06a1fd92dd9c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: '21', tag:"content", imageSrc: 'https://images.unsplash.com/photo-1630636755810-0d1a9b556512?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
    ]

    const [state, setState] = useState(images)

    const ImageSort = (e) => {
        if(e.target.name === 'all') {
            setState(images)
        }else setState(images.filter(image => image.tag === e.target.name))
    }

    return (
        <div  data-aos="fade-top" className="container py-4 TM_Portfolio">
            <div className="row">
                <div className="col-3">
                    <UserInfoCard />
                </div>
                <div className="col-8">
                    <div className="card p-3">
                        <div className="card-body">
                            <h4 className="text-capitalize TM_Portfolio_Title">portfolio</h4>
                            <div>
                                <ul className="list-unstyled d-flex">
                                    {BtnTyps.map(e => (
                                        <li className="me-4" key={e.name}>
                                            <button className="btn text-capitalize" name={e.name} onClick={ImageSort}>
                                                {e.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="TM_Portfolio_Galery_List">
                                {state.map(e  => (
                                    <div data-aos="zoom-in" className="TM_Portfolio_Galery_List_Item" key={e.id}>
                                        <img className="galery_img_item" alt={e.imageSrc} src={e.imageSrc} />
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
