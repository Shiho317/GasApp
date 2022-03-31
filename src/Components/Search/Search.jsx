import React, { useState } from 'react';
import './Search.style.css';

const Search = () => {
  
  const [ cityName, setCityName ] = useState('');
  const [ countryName, setCountryName ] = useState('');

  const [ resultsData, setResultsData ] = useState([]);
  const [ currentLatitude, setCurrentLatitude ] = useState();
  const [ currentLongitude, setCurrentLongitude ] = useState();

  const isCityName = (e) => {
    setCityName(e.target.value)
  }

  const isCountryName = (e) => {
    setCountryName(e.target.value)
  }

  // const getData = (method, url, data) => {
  //   const datas = fetch(url, {
  //     method: method,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then(results => {
  //     return results.json();
  //   })
  //   return datas
  // }

  const token = process.env.REACT_APP_MY_TOKEN;

  console.log(token)

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log('yy')
    const response = await fetch('https://api.collectapi.com/gasPrice/canada', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify()
    }).then(results => {
      return results.json();
    }).catch(error => {
      console.log(error)
    })

    console.log(response)

  }

  // const results = fetch('https://fuel-v2.cc.api.here.com/fuel/stations.json');
  // console.log(results)

  const useLocation = () => {
    navigator.geolocation.getCurrentPosition(currentLocation, error)
  }

  const currentLocation = (position) => {
    setCurrentLatitude(position.coords.latitude);
    setCurrentLongitude(position.coords.longitude);
    console.log(currentLatitude)
  }

  const error = (error) => {
    alert("We could not get your current location. Please try again.")
    console.log(error.code)
  }

  return (
    <div className='search-wrapper'>
      <div className='search-img'>
        <img src='https://cdn.dribbble.com/users/458522/screenshots/14324329/media/aede197c4afe820c2e5d93b9f7a8fef3.png?compress=1&resize=1200x900&vertical=top' alt='search-img'/>
      </div>
      <div className='search-contents'>
        <div className='search-input'>
          <form onSubmit={onSubmit}>
            <label>City:</label>
            <input type='text' placeholder='city name' id='city' value={cityName} onChange={(e) => isCityName(e)}/>
            <label>Country:</label>
            <input type='text' placeholder='country' id='country' value={countryName} onChange={(e) => isCountryName(e)}/>
            <button type='submit'>Find Gas Stations</button>
          </form>
        </div>
        <p>or</p>
        <div className='location-btn'>
          <button onClick={useLocation}>Use Your Location</button>
        </div>
      </div>
    </div>
  )
}

export default Search