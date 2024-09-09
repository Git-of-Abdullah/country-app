import React from 'react';

export default function Search({setQuery}) {
    return (
        <input 
            type="text" 
            className='input' 
            placeholder='Enter name' 
            onChange={ (e) => setQuery(e.target.value.toLowerCase())}
             // Correctly use setQuery
        />
    );
}
