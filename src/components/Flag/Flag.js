import React from 'react';

import { types } from "../../annotations";

import "./Flag.scss";

export const Flag = ({ flag, clickFlag }) => {
    const flagPositionStyle = {
        top: ` ${Math.ceil(flag.y)}px`,
        left: `${Math.ceil(flag.x) + 10}px`, //+10 to include the "pointer"
        backgroundColor: types[flag.type] + "cc" //cc is the 80% opacity.
    }

    const clickFlagHandler = (event) => {
        event.stopPropagation();
        clickFlag(flag.label)
    }

    return (
        <div onClick={(event) => clickFlagHandler(event)} className='flag' style={flagPositionStyle} >
            <h3>{flag.label}</h3>
        </div>
    )
}