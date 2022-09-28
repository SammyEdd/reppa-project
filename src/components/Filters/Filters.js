import React, { useEffect } from 'react';

import { types } from "../../annotations";

import "./Filters.scss";

export const Filters = ({ selectedFilters, setSelectedFilters }) => {
    const typesArray = Object.keys(types);

    useEffect(() => {
        setSelectedFilters(typesArray);
    }, [])

    const handleFilterClick = (type) => {
        if (selectedFilters.includes(type)) {
            const newSelectedFilters = selectedFilters.filter(filterType => filterType !== type);
            setSelectedFilters(newSelectedFilters);
        } else {
            const newSelectedFilters = selectedFilters.concat(type);
            setSelectedFilters(newSelectedFilters);
        }
    }

    const handleAllClick = () => {
        if (selectedFilters.length === typesArray.length) {
            setSelectedFilters([]);
        } else {
            setSelectedFilters(typesArray);
        }
    }

    const allButtonStyle =
        selectedFilters.length === typesArray.length ? { backgroundColor: "#59CD90" }
            : selectedFilters.length === 0 ? { backgroundColor: "#EE6352" }
                : { backgroundColor: "#3FA7D6" }

    return (
        <div className='filter' >
            <button
                onClick={() => handleAllClick()}
                style={allButtonStyle}
            >
                All
            </button>
            {typesArray.map((type, i) => {
                return (
                    <button
                        key={i}
                        className={`filter__type ${selectedFilters.includes(type) ? "filter__type--active" : ""} `}
                        style={{ backgroundColor: types[type] }}
                        onClick={() => handleFilterClick(type)}
                    >
                        {type}
                    </button>
                )
            })}
        </div>
    )
}