import React from 'react'
import { useLocation } from 'react-router-dom';
import './BrewInfo.css';

function BrewInfo() {
    const location = useLocation()
    const {brew} = location.state
  return (
    <div>
    <h1>{brew.name}</h1>
    <p>{brew.city}, {brew.state}</p> 
    <p>{brew.address_1}</p>
    <p>{brew.website_url}</p>
    </div>         
  )
}

export default BrewInfo
 