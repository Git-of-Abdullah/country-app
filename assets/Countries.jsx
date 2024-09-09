import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard'; // Make sure to import your CountryCard component
import CountriesShimmer from './CountriesShimmer'; // Make sure to import your CountriesShimmer component

const CountryList = ({query}) => {
    const [countryData, setCountryData] = useState([]);
    

    useEffect(() => {
        // Simulate fetching country data
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountryData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            
            });
    }, []);

    return (
        <>
        
        <section className='countries-list'>

            {
               countryData
                    .filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
                    .map(country => (
                        <CountryCard
                            key={country.name.common}
                            name={country.name.common}
                            image={country.flags.svg}
                            population={country.population}
                            capital={country.capital?.[0]} // Optional chaining to handle cases where capital might be undefined
                        />
                    ))
            }
        </section>
        </>
    );
};

export default CountryList;
