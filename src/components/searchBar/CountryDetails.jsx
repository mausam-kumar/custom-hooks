import React from 'react'
import {useParams} from 'react-router-dom'

function CountryDetails() {

    const value = useParams()
    console.log(value.id);
    
    return (
        <div>
            CountryDetails
        </div>
    )
}

export default CountryDetails
