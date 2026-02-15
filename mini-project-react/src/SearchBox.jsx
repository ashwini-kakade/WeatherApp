import { useState } from 'react'
import  './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox({ updateWeatherInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "38d8a1aa2d0026bcf371764213b39351";

    let getWeatherInfo = async (city) => {

    let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    let response = await fetch(url);

    let data = await response.json();

    if (data.cod !== 200) {
        alert("City not found or API issue");
        return;
    }

    const result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        icon: data.weather[0].icon
    }
     console.log(result);
    updateWeatherInfo(result);
}

    
    let [city, setCity] = useState('');

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
   let handleSubmit = (evt) => {
    evt.preventDefault();

    if (!city.trim()) {
        console.log("City is empty");
        return;
    }

    console.log(city);
    getWeatherInfo(city);
    setCity('');
}

    return (
       <div className="search-box">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}> <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/>
        <br></br><br></br>
         <Button variant="contained" type="submit"> Search</Button>
        </form>
        </div>

    )

}