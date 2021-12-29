import {useEffect, useState} from 'react'
import CityData from './ShowCityData';
const apiKey = '13913772e1c6488fa6d154020212012';
function Weather() {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [data, setData] = useState();
    useEffect(() => {

            navigator.geolocation.getCurrentPosition((pos) => {
                setLat(pos.coords.latitude);
                setLong(pos.coords.longitude);
            })
            if(lat && long) {
                fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=10&aqi=no&alerts=no`
                ).then(response => response.json()
                ).then(res => {
                    setData(res)
                }).catch(err => console.log(err))
            }

    },[lat, long]);

    return(
        <div>
            {typeof(data) === "object" ?
                <CityData data = {data}/>
            :<h2 style={{
                textAlign: 'center'
            }}> Fetching Weather Details</h2>}
        </div>
    )
}
export default Weather;