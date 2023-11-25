import { useState } from 'react';
import './App.css';
import Countrylist from './Comp/Countrylist';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [countries, setCountries] = useState([])

  return (
    <div className="App">
      <select id='continent' className='dropClass'>
        <option value="https://restcountries.com/v3.1/region/africa">Africa</option>
        <option value="https://restcountries.com/v3.1/region/asia">Asia</option>
        <option value="https://restcountries.com/v3.1/region/europe">Europe</option>
      </select>
      <Button variant="success" className='btnClass' onClick={async() => {
        let url = document.querySelector("#continent").value
        let response = await fetch(url)
        let json = await response.json()
        // console.log(json)
        setCountries(json)
      }}>Get Data</Button>
      <div>
      {countries && <Countrylist info={countries}/>}
      </div>
    </div>
  );
}

export default App;
