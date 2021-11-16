import axios from "axios";

const getCityWeather = async (value) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=f45251d3ea56d5b3855dcf77bcd6d099`,
  })
  return promise
};

const getCurrentLocationWeather = async (lat, lon) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f45251d3ea56d5b3855dcf77bcd6d099`,
  })
  return promise
};

export { getCityWeather, getCurrentLocationWeather }