import axios from 'axios';
const API_KEY = '7f093e16a92eb32699e935e998c23e7d';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url =`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return({
    type: FETCH_WEATHER,
    payload: request
  }
  );
}
