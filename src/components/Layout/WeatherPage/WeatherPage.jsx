import React, { useState } from 'react';

// styledComponents
import { WeatherTitle } from '../../StyledComponents/Title';
import { WeatherCard } from '../../StyledComponents/WeatherCard';
import { WeatherInput } from '../../StyledComponents/Input';
// data
import { monthData } from '../../../data';

//librabries
import axios from 'axios';

//icons
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export default function WeatherPage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  // initial value of Weather backgroundIma will be set in className='clouds'
  const [bgWeather, setBgWeather] = useState('gray-clouds');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(' fetched data: ', response.data);
        setBgWeather(response.data.weather?.[0].main.toLowerCase());
      });

      setLocation('');
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  // get date
  const current = new Date();
  const date = `${current.getUTCDate()} ${
    monthData[current.getUTCMonth() + 1]
  }`;

  //get time
  const getTime = () => {
    const current = new Date();

    const time = current.toUTCString();
    const timeHours = parseInt(time.slice(-12, -10));

    let timezoneOffsetHours = Math.floor(data.timezone / 3600);

    const foreignTimezoneHour = timeHours + timezoneOffsetHours;
    console.log(foreignTimezoneHour);
    const timezone24h =
      foreignTimezoneHour > 24 ? foreignTimezoneHour % 24 : foreignTimezoneHour;
    const worldClock = timezone24h.toString() + time.slice(-10, -7);
    return worldClock;
  };

  return (
    <div className={`weather-app ${bgWeather}`}>
      <div className="search">
        <WeatherInput
          value={location}
          onChange={handleChange}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <section className="weather-info-container">
        <div className="top">
          <div className="location">
            <WeatherTitle>{data.name}</WeatherTitle>
          </div>

          {data.name && (
            <div className="temperature">
              {data.main && <h3>{Math.floor(data.main.temp)}°</h3>}
              <div className="weather-icon-div">
                {data.weather && (
                  <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="weatherIcon"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        {data.name && (
          <>
            <div className="main">
              <p>{getTime()}</p>
              <p> Today, {date}</p>
            </div>
            <div className="bottom">
              <WeatherCard className="feels">
                {data.main && <p>{Math.floor(data.main.feels_like)}°</p>}
                <div className="weather-icon-bottom">
                  <WiThermometer className="wi" />
                </div>
                <p>Feels Like</p>
              </WeatherCard>
              <WeatherCard className="humidity">
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <div className="weather-icon-bottom">
                  <WiHumidity className="wi" />
                </div>
                <p>Humidity</p>
              </WeatherCard>
              <WeatherCard className="wind">
                {data.wind && <p>{Math.floor(data.wind.speed)} km/h</p>}
                <div className="weather-icon-bottom">
                  <WiStrongWind className="wi" />
                </div>
                <p>Wind Speed</p>
              </WeatherCard>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
