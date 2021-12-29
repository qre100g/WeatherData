import './CSS/CurrentWeather.css'
import Weather from './Components/weather';
import City from './Components/weatherCity';

function App() {
  return (
    <div className='app'>
      <City/>
      <Weather/>
    </div>
  );
}

export default App;
