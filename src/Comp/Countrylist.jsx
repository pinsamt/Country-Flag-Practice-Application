import React from 'react'
import Country from './Country'

const Countrylist = ({ info }) => {
  return (
    // console.log(info)
    <ul>{info.map((countryObj, i) => {return <li key={i}><Country data={countryObj}/></li>})}</ul>
  )
}

export default Countrylist