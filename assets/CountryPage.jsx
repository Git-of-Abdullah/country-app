import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const CountryPage = () => {
    const { name } = useParams();

    const [countryData, setCountryData] = useState({});
    const [borderCountryNames, setBorderCountryNames] = useState([]);

    useEffect(() => {
        // Fetch main country data
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data =>
                setCountryData({
                    name: data[0].name.official,
                    nativeName: data[0].name.common,
                    population: data[0].population.toLocaleString('en-IN'),
                    tld: data[0].tld,
                    region: data[0].region,
                    subregion: data[0].subregion,
                    currencies: Object.values(data[0].currencies)
                        .map(currency => currency.name)
                        .join(" "),
                    languages: Object.values(data[0].languages).join(", "),
                    image: data[0].flags.svg,
                    borders: data[0].borders ? data[0].borders : []
                })
            )
            .catch(error => alert("Error fetching data"));
    }, [name]);

    useEffect(() => {
        if (countryData.borders && countryData.borders.length > 0) {
            // Fetch data for border countries
            Promise.all(
                countryData.borders.map(borderCode =>
                    fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
                        .then(res => res.json())
                        .then(data => data[0].name.common)
                )
            ).then(borderNames => {
                setBorderCountryNames(borderNames); // Set the names of border countries
            }).catch(error => alert("Error fetching border countries"));
        }
    }, [countryData.borders]);

    return !  countryData.name ? "Loading..." : (
        <section className="country-page">
            <img src={countryData.image} alt={countryData.name} />
            <h1>{countryData.name}</h1>
            <div className="details">
                <h3>Native Name: <span>{countryData.nativeName}</span></h3>
                <h3>Population: <span>{countryData.population}</span></h3>
                <h3>Region: <span>{countryData.region}</span></h3>
                <h3>Sub-Region: <span>{countryData.subregion}</span></h3>
                <h3>TLD: <span>{countryData.tld}</span></h3>
                <h3>Currencies: <span>{countryData.currencies}</span></h3>
                <h3>Languages: <span>{countryData.languages}</span></h3>
            </div>

            <div className="border">
                <h3>Borders: &nbsp;
                    <span>
                        {borderCountryNames.length > 0 ? (
                            borderCountryNames.map((borderName, index) => (
                                <Link key={index} className="bordersName" to={`/country/${borderName}`}>
                                    {borderName}
                                </Link>
                            ))
                        ) : (
                            <span className='border-loader'>Loading Borders..</span>
                        )}
                    </span>
                </h3>
            </div>
        </section>
    );
};
