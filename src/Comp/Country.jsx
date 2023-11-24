import React, { useEffect, useState } from 'react'

const Country = ( {data} ) => {
    let [showInfo, setShowInfo] = useState(false)
  return (
    // console.log(data)
    <div className='countryDiv'>
    <img onClick={() => {setShowInfo(!showInfo)}} src={data.flags.png}/>
    {showInfo && <h2>{data.name.common}</h2>}
    {showInfo && <p>Capital: {data.capital}</p>}
    {showInfo && <p>Population: {data.population}</p>}
    </div>
  )
}

export default Country