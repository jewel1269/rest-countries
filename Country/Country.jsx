import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleAddCountry }) => {
    const [count, setCount] = useState(0);
    const [visited, setVisited] = useState(false)

    const handleBtn = () => {
        const newCount = count + 1;
        setCount(newCount);

        const countryName = country?.name?.common;
        handleAddCountry(countryName);

        setVisited(!visited)

        
    };

    return (
        <div className="country">
            <h3>Countries: {country?.name?.common} </h3>
            <img src={country?.flags?.png} alt="" />
            <h4>population: {country?.population}</h4>
            <h4>capital: {country?.capital}</h4>
            <hr />

            <div>
                <button style={{ backgroundColor: 'lightblue', boxShadow: '2px 2px 2px 2px black' }}>show details</button><br /> <br />
                <button onClick={handleBtn} style={{ backgroundColor: 'lightblue', boxShadow: '2px 2px 2px 2px black' }}>{visited ? 'visited' : 'going'}</button>
                {visited ? ' i have visited this country': 'I want to visit'}
            </div>
        </div>
    );
};

export default Country;
