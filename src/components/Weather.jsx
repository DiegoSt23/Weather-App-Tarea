import { getCityWeather } from "../apiRequests/requests";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
  const { city } = useParams();
  const [requestStatus, setRequestStatus] = useState(true);
  const [view, setView] = useState(true);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");

  useEffect(() => {
    if (city) {
      const func = async () => {
        try {
          const res = await getCityWeather(city); 
          console.log(res.data)       
          setRequestStatus(true);
          setCityName(res.data.name);
          setCountry(res.data.sys.country);
          setTemperature(res.data.main.temp);
          setMax(res.data.main.temp_max);
          setMin(res.data.main.temp_min);
          setIcon(res.data.weather[0].icon);
          setDescription(res.data.weather[0].description);
          setWind(res.data.wind.speed);
          setHumidity(res.data.main.humidity)
        } catch(error) {
          setRequestStatus(false)
        }
      } 
      func()
    }
  }, [city]);

  const handleChangeView = () => {
    setView(!view)
  };

  return (
    <div className="weather-container">
      {requestStatus
        ? (<>
            <section className="header">
              <h1>{cityName}</h1>
              <p>{country}</p>
            </section>
            <section className="info-container">
              {view
                ? (<div>
                    <h2>{temperature}°C</h2>
                  </div>)
                : (<>
                    <WeatherDetails
                      temperature={temperature}
                      maxTemp={max}
                      minTemp={min}
                      description={description}
                      icon={icon}
                      wind={wind}
                      humidity={humidity}                 
                    />
                  </>)
              }
            </section>
            <section className="options">
              <Link to="/" className="link">
                <p>Back</p>
              </Link>  
              {view
                ?  <p onClick={handleChangeView}>More</p>
                :  <p onClick={handleChangeView}>Less</p>
              }                          
            </section>
          </>)
        : (<>
            <section>
              <p>Please enter a valid name.</p>
            </section>  
            <section className="options">
              <Link to="/" className="link">
                <p>Back</p>
              </Link>              
            </section>
          </>)     
      }           
    </div>
  )
};

export default Weather