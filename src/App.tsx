import '@mui/material'
import Weather from './components/Weather';
import CitySearchInput from './components/CitySearchInput';
import { useState } from 'react';
import ForecastWeather from './components/ForecastWeather';
import { getForecast, getRealTime } from "./services/weatherApi";
import Button from '@mui/material/Button';
import {RealTimeDataObject} from './types/RealTimeWeather'
import { ForecastWeatherObject,Forecast } from './types/ForecastWeather';
function App() {

  const [userInput, setuserInput] = useState("" as string)
  const [errorMessage, seterrorMessage] = useState(false)
  const [realTimeData, setrealTimeData] = useState({} as RealTimeDataObject)  
  const [forecastData, setforecastData] = useState({} as Forecast)  

 
  const getRealTimeWeather:any = (userInput: string) => {
    if(userInput==""|| userInput==undefined){
     
    }else{
    getRealTime(userInput).then((data) => {
      setrealTimeData(data)
      
    })}
  };

  const getForecastWeather = (input:string)=>{
    getForecast(input).then((data:any)=>{
      setforecastData(data.forecast.forecastday)
      console.log(data.forecast.forecastday)
    })
  }
 
 




  return (
    <>
     <CitySearchInput setInput={setuserInput} />
      <Button
        variant="contained"
        onClick={() => {
          getRealTimeWeather(userInput);
          getForecastWeather(userInput);
        }}
      >
        Get data
      </Button>
      
      <Weather realtimedata={realTimeData} />
      <ForecastWeather forecastData={forecastData} cityInput={userInput} />
    
    </>
    
  );
}

export default App;
