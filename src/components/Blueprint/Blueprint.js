import React from 'react';

import { Flag } from '../Flag/Flag';

import { useFlags } from '../../hooks/useFlags';

import construction_blueprint from "../../assets/construction_blueprint.png";

import "./Blueprint.scss";

export const Blueprint = ({selectedFilters}) => {
    const [flags, createFlag, clickFlag] = useFlags();

    const handleClick = (event) => {
        let elem = document.querySelector('#blueprint');
        let rect = elem.getBoundingClientRect();
        const clickX = event.clientX - Math.ceil(rect.left);
        const clickY = event.clientY - Math.ceil(rect.top);
        createFlag(clickX, clickY);
    }

    return (
        <div className="blueprint-container" >
            <div onClick={(event) => handleClick(event)} className="blueprint" id="blueprint" >
                <img className="blueprint__image" src={construction_blueprint} alt="construction blueprint" />
                {flags.map((flag) => {
                    return selectedFilters.includes(flag.type) ?  <Flag key={flag.label} flag={flag} clickFlag={() => clickFlag(flag.label)} /> : null
                })}
            </div>
        </div>
    )
}
