import React, { useState } from "react";

// data & apiKey
import { apiKey } from "../../../api-key";
import { monthData } from "../../../data";

//librabries
import axios from "axios";
// import 'dotenv/config';

// styles
// import "../../../scss/layout";

//icons
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";
console.log("process: ", process.env);
export default function WeatherPage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // initial value of className will be a self made dark background className
  const [bgWeather, setBgWeather] = useState("clouds");
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(" fetched data: ", response.data);
        setBgWeather(response.data.weather?.[0].main.toLowerCase());
      });

      setLocation("");
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
  const time = current.toUTCString();
  const timeHours = parseInt(time.slice(-12, -10));
  // I do Math.floor insdie timezoneOffsetHours because some timeZones devided by 3600, comes with a dezima.
  // e.g. Adelaide timezone 34200 / 360 = 9,5
  const timezoneOffsetHours = Math.floor(data.timezone / 3600);
  const foreignTimezoneHour = timeHours + timezoneOffsetHours;
  const worldClock = foreignTimezoneHour.toString() + time.slice(-10, -7);
  // console.log("time: ", time);
  // console.log("timeHours as a number:  ", timeHours);
  // console.log("timezoneOffsetHours: ", timezoneOffsetHours);
  // console.log("foreignTimezoneHour: ", foreignTimezoneHour);
  // console.log("worldClock: ", worldClock);

  // const bgWeather = data.weather?.[0].main.toLowerCase();

  // console.log(bgWeather);
  // console.log(data.weather?.[0].main.toLowerCase());
  return (
    <div className={`weather-app ${bgWeather}`}>
      <div className="search">
        <input
          value={location}
          onChange={handleChange}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <section className="weather-info-container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
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
              <p>{worldClock}</p>
              <p> Today, {date}</p>
            </div>
            <div className="bottom">
              <div className="feels">
                {data.main && <p>{Math.floor(data.main.feels_like)}°</p>}
                <div className="weather-icon-bottom">
                  <WiThermometer className="wi" />
                </div>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <div className="weather-icon-bottom">
                  <WiHumidity className="wi" />
                </div>
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind && <p>{Math.floor(data.wind.speed)} km/h</p>}
                <div className="weather-icon-bottom">
                  <WiStrongWind className="wi" />
                </div>
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
