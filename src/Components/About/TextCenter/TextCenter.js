import React from 'react'

import './TextCenter.css'

function TextCenter() {
    return (
        <section  className="TM_About_Center_Text">
            <h3 className="text-uppercase TM_About_Center_Title">hello i'm arden</h3>
            <p>
                I am a talanted Freelance Graphic Designer and Illustrator. I design websites, logos, brochures, banners, book covers, and everything related to design and inspiration. I have graduated from International University of Design. Some of my works featured on international exhibition of design.
            </p>
            <button className="btn btn-default text-uppercase mt-2 TM_About_Center_Btn">
                <span className="me-2">
                    <i className="fa fa-share-alt"></i>
                </span>
                share
            </button>
        </section>
                        
    )
}

export default TextCenter
