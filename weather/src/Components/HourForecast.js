import { useEffect, useState} from "react";
var temp = [];
export default function HourForecast (props) {
    const [hourForcast, setHForcast] = useState();
    const [h, setH] = useState([]);
    var twoDaysForecast = []
    useEffect(() => {
        setHForcast(props.data.forecast.forecastday[0].hour)
        if(hourForcast) {
            temp = hourForcast.filter((e) => {
                return (parseInt(e.time.split(' ')[1]) > parseInt(props.data.current.last_updated.split(' ')[1]))
            })
            twoDaysForecast.push(...temp);
            if(twoDaysForecast.length > 0) {
                temp = props.data.forecast.forecastday[1].hour.map((e) => {
                    return e;
                })
                twoDaysForecast.push(...temp);
            }
            for(let i = 0 ; i < 24 && twoDaysForecast.length < 48; i++) {
                twoDaysForecast.push(props.data.forecast.forecastday[2].hour[i])
            }
            setH(twoDaysForecast);

        }
    },[hourForcast])
    return(<>
        {typeof(hourForcast) === 'object' ? <>
            <h3 style={{
                textAlign: 'start'
            }}>48 Hours ForeCast</h3>
            <div style={{
                display : 'flex',
                overflowX: 'auto',
                width: 'calc(80vw)',
                scrollBehavior: 'smooth'
            }} onScroll={(e) => {
            }}>
                {h.map((e) => {
                    return (<div style={{
                        marginRight: '10px'
                    }}>
                        <h3>{e.time.split(' ')[1]}</h3>
                        <img src= {e.condition.icon} />
                        <h3>{e.temp_c}</h3>
                    </div>)
                })}
            </div>
        </> : <></>}
    </>)
}