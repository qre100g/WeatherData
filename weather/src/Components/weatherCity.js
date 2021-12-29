import { useEffect, useState } from "react"
import CityData from "./ShowCityData";

const apiKey = '13913772e1c6488fa6d154020212012';

export default function City () {
    const [val, setVal] = useState('')
    const [cityName, setCityName] = useState();
    const [cityData, setData] = useState();

    useEffect(() => {
        if(typeof(cityName) === "string") {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7&aqi=no&alerts=no`).then(
                response => response.json()
                ).then(res => {
                    setData(res);
                    console.log(res)
                }).catch(err => console.log(err))
        }
    },[cityName])



    return (
        <div> 
            <input 
            style={{
                height: '20px',
                width: '50%',
                textAlign: 'center'
            }}
            placeholder="Enter the City Name" 
            value={val}
            onChange={
                (e) => {
                    setVal(e.target.value);
                }
            }
            />
            <button onClick={() => {
                console.log(val);
                setCityName(val);
                console.log(cityName);
            }}>Click me</button>
            
            {typeof(cityData) === 'object'? <CityData data = {cityData} />
             : <h2>Enter the City</h2>}
        </div>
    )
}