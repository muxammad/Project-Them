import React from 'react'

function ProgresBar({ prosentage, name }) {
    return (
        <div className="mb-4">
            <div className="d-flex justify-content-between ">
                <span className="text-capitalize" style={{fontWeight: 700, letterSpacing: '.1em', color: '#444444',fontSize: '14px'}}>{name}</span>
                <span className="text-muted">{`${prosentage}%`}</span>
            </div>
            <div className="w-100" style={{backgroundColor: '#ececec', height: '4px'}}>
                <div style={{width: `${prosentage}%`,height: '4px', backgroundColor: '#937bcf'}}></div>
            </div>
        </div>
    )
}

export default ProgresBar
