//librabries
import axios from 'axios';

export const searchLocation = async ({
  e,
  url,
  setData,
  setBgWeather,
  setLocation,
}) => {
  if (e.key === 'Enter') {
    const { data } = await axios.get(url);

    setData(data);
    setBgWeather(data.weather?.[0]?.main.toLowerCase());

    return setLocation('');
  }
};

export const getTime = ({ data, current }) => {
//   const current = new Date();

  const time = current.toUTCString();
  const timeHours = parseInt(time.slice(-12, -10));

  let timezoneOffsetHours = Math.floor(data.timezone / 3600);

  const foreignTimezoneHour = timeHours + timezoneOffsetHours;
  //   console.log(foreignTimezoneHour);
  const timezone24h =
    foreignTimezoneHour > 24 ? foreignTimezoneHour % 24 : foreignTimezoneHour;
  const worldClock = timezone24h.toString() + time.slice(-10, -7);
  return worldClock;
};
