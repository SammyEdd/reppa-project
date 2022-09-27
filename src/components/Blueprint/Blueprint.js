import React from 'react';
import { Flag } from '../Flag/Flag';

import construction_blueprint from "../../assets/construction_blueprint.png";

import "./Blueprint.scss";

export const Blueprint = ({ flags }) => {

    const getCoordinates = (event) => {
        let elem = document.querySelector('#test');
        let rect = elem.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - Math.ceil(rect.top);
        console.log(clickX, clickY);
    }

    return (
        <div className="blueprint-container" >
            <div onClick={(event) => getCoordinates(event)} className="blueprint" id="test" >
                <img className="blueprint__image" src={construction_blueprint} alt="construction blueprint" />
                {flags.map((flag) => {
                    return <Flag key={flag.label} flag={flag} />
                })}
            </div>
        </div>
    )
}
