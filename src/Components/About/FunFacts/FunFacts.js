import React from 'react'

import './FunFacts.css'

function FunFacts() {

    const facts = [
        {
            icon: 'fa fa-birthday-cake',
            num: '150',
            text: 'happy clients'
        },
        {
            icon: 'fa fa-briefcase',
            num: '23',
            text: 'years experience'
        },
        {
            icon: 'fa fa-trophy',
            num: '17',
            text: 'awards won'
        },
        {
            icon: 'fa fa-thumbs-up',
            num: '250',
            text: 'projects done'
        },
    ]

    return (
        <section className="TM_About_FunFacts">
            <h4 className="text-capitalize TM_About_FunFacts_Title">
                fun facts
            </h4>
            <div className="d-flex justify-content-between">
                {facts.map(e => (
                    <div className="card" key={e.num}>
                        <div className="card-body">
                            <div className="text-center d-flex flex-column">
                                <p className="TM_About_FunFacts_Icon">
                                    <i className={e.icon}></i>
                                </p>
                                <h4>{e.num}</h4>
                                <span className="text-capitalize text-muted">{e.text}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default FunFacts
