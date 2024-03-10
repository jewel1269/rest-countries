import React, { useEffect, useState } from 'react';
import Country from '../../Country/Country';
import './Container.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [totalCountries, setTotalCountries] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('lightblue');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleAddCountry = (countryName) => {
        setTotalCountries(totalCountries + 1);
        setSelectedCountry(countryName);
        setBackgroundColor('lightgreen');
    }

    return (
        <div>
            <h1>This is World Tour Mission </h1>
            <h4 id='shamu'>Country Name:<li>{selectedCountry}</li></h4>
            <h4>Total: {totalCountries}</h4>

            <div className='container'>
                {countries.map(country => (
                    <Country
                        key={country.cca2}
                        country={country}
                        handleAddCountry={handleAddCountry}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;

