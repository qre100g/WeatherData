import { useEffect, useState } from "react"
import arrow from '../Images/direction.png'
import '../CSS/CurrentWeather.css'
import HourForecast from "./HourForecast";

export default function CityData (props) {
    return(<>
        {typeof(props.data) === "object" && typeof(props.data.current) ==="object" ? (
        <div className="weatherBody">

            <h2>{props.data.location.name}, {props.data.location.region}, {props.data.location.country}</h2>

            <div style={{
                display: 'flex'
            }}>
                <div style={{
                    width:'75%',
                    display:'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingRight: '20px',
                    borderRight: '1px solid white'
                }}>

                    <div>
                        <img className="icon" src={props.data.current.condition.icon}/>
                        <h2 style={{
                            marginTop:'-20px'
                        }}>{props.data.current.condition.text}</h2>
                    </div>
                    <h1 style={{
                        fontSize: '60px'
                    }}> {props.data.current.temp_c} <sup>o</sup>C</h1>

                    <div style={{
                        textAlign: 'start'
                    }}>
                        <h3>Wind: {props.data.current.wind_kph} kmph  </h3>
                        <h3>humidity: {props.data.current.humidity} %</h3>
                        <h3>Pressure: {props.data.current.pressure_mb} mb</h3>
                    </div>
                </div>

                <div>
                    <h3 style={{
                        marginLeft: '20px'
                    }}>
                         3 Day forcast
                        {props.data.forecast.forecastday.map((e) => {
                        return <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <span>{e.date.split('-')[2]}/{e.date.split('-')[1]}  </span>
                                <span> {e.day.avgtemp_c}<sup>o</sup>C</span>
                            </div>

                            <div style={{
                                display:'flex',
                                flexDirection: 'column'
                            }}>
                                <img src={e.day.condition.icon}/>
                                <span style={{
                                }}>{e.day.condition.text}</span>
                            </div>
                        </div>
                    })}</h3>
                </div>
            </div>

            

                <hr/>

            {typeof(props.data.forecast) === "object" ? 

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <div>
                        <HourForecast data = {props.data}/>
                    </div>
                </div>

            :<>{console.log(props.data.current)}</>}

        </div>) : <h1>no data</h1>}
    </>)
}