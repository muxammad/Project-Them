import React from 'react'

import './Testimonals.css'

function Testimonals() {
    return (
        <section className="TM_About_Testimonals">
            <h4 className="text-capitalize TM_About_Testimonals_Title">testimonals</h4>
            <div className="row">
                <div className="col">
                    <div className="card TM_About_Testimonals_Comment">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center TM_About_Testimonals_Client">
                        <img alt="client avatar" className="rounded-circle TM_About_Testimonals_ClientImage" src="https://randomuser.me/api/portraits/women/24.jpg" />
                        <div className="d-flex flex-column mx-3">
                            <span className="text-capitalize fw-bold">Milagros Betts</span>
                            <span className="text-capitalize text-muted">client</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card TM_About_Testimonals_Comment">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center TM_About_Testimonals_Client">
                        <img alt="client avatar" className="rounded-circle TM_About_Testimonals_ClientImage" src="https://randomuser.me/api/portraits/women/21.jpg" />
                        <div className="d-flex flex-column mx-3">
                            <span className="text-capitalize fw-bold">Milagros Betts</span>
                            <span className="text-capitalize text-muted">client</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonals
