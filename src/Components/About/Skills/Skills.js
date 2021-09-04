import React from 'react'
import ProgresBar from './ProgresBar/ProgresBar'

import './Skills.css'

function Skills() {
    return (
        <section className="px-4 TM_About_Skills ">
            <div className="row">
                <div className="col">
                    <h4 className="text-capitalize TM_About_Skills_Title">my skills</h4>
                    <div>
                        <ProgresBar name="photoshot" prosentage="90" />
                        <ProgresBar name="illustrator" prosentage="82" />
                        <ProgresBar name="javaScript" prosentage="77" />
                    </div>
                </div>
                <div className="col">
                    <h4 className="text-capitalize TM_About_Skills_Title">languages</h4>
                    <div>
                        <ProgresBar name="english" prosentage="93" />
                        <ProgresBar name="spanish" prosentage="80" />
                        <ProgresBar name="italian" prosentage="66" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
