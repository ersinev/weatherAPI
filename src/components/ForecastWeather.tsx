import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ForecastWeatherObject,Forecast } from "../types/ForecastWeather";

interface ForecastWeatherProps {
    cityInput: string;
    forecastData: Forecast | undefined;
  }

const ForecastWeather= (props:ForecastWeatherProps)=> {
  const [forecast3Days, setforecast3Days] = useState<Forecast | undefined>(undefined)
  useEffect(() => {
    setforecast3Days(props.forecastData);
  }, [props.forecastData])

  console.log(forecast3Days)
  return (
   <>
    
   </>
  )
}

export default ForecastWeather