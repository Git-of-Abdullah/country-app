import { Link } from "react-router-dom"

export default function CountryCard( { name , image , population, capital }) {
    
    
  return (
    <Link className='card' to= {`/country/${name}`}>
        <img src={image} alt="image"></img>
        <h3>Country Name : <span className="Country-name">{name}</span></h3>
        <h3>Population : <span className="population">{ population.toLocaleString('en-IN')}</span></h3>
        <h3>Capital : <span className="capital">{capital}</span></h3>
    </Link>
  )
}
