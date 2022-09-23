import React, { useState } from 'react';

// utils
import { searchLocation, getTime } from '../../../utils/weatherPageUtils';

// styledComponents
import { WeatherLocationTitle } from '../../StyledComponents/Title';
import { WeatherCard } from '../../StyledComponents/WeatherCard';
import { WeatherInput } from '../../StyledComponents/Input';

// data
import { monthData } from '../../../data';

// react-icons
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export default function WeatherPage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [bgWeather, setBgWeather] = useState('gray-clouds');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const handleSearchLocation = (e) => {
    searchLocation({ e, url, setData, setBgWeather, setLocation });
  };

  // get date
  const current = new Date();
  const date = `${current.getUTCDate()} ${
    monthData[current.getUTCMonth() + 1]
  }`;

  return (
    <div className={`weather-app ${bgWeather}`}>
      <div className="search">
        <WeatherInput
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleSearchLocation}
          placeholder="Enter Location"
        />
      </div>
      <section className="weather-info-container">
        <div className="top">
          <div className="location">
            <WeatherLocationTitle>{data.name}</WeatherLocationTitle>
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
              <p>{getTime({ data, current })}</p>
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