import React from 'react';

import {types} from "../../annotations";

import "./Flag.scss";

export const Flag = ({ flag }) => {
    const flagPositionStyle = {
        top: ` ${Math.ceil(flag.x / 1.5)}px`, //1.5 to match the image resize.
        left: `${Math.ceil(flag.y / 1.5) + 10}px`, //+10 to include the "pointer"
        backgroundColor: types[flag.type] + "cc" //cc is the 80% opacity.
    }
    console.log(flag.label, "X", Math.ceil(flag.x / 1.5), "Y", Math.ceil(flag.y / 1.5))
    return (
        <div className='flag' style={flagPositionStyle} >
            <h3>{flag.label}</h3>
        </div>
    )
}