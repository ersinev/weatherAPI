import { Avatar, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Forecast } from "../../types/ForecastWeather";


interface ForecastWeatherProps {
    cityInput: string;
    forecastData: Forecast | undefined;
  }

const ForecastWeather= (props:any)=> {
  const [forecast3Days, setforecast3Days] = useState<Forecast | undefined>(undefined)
  
  useEffect(() => {
    setforecast3Days(props.forecastData);
  }, [props.forecastData]);

  console.log(props.forecastData);
  
  return (
    <>
      {Array.isArray(props.forecastData) &&
        <Grid container >
          {props.forecastData.map((day: any) => (
            <Grid className="forecastData" item xs={4} key={day.date}>
              <h2>{day.date}</h2>
              <Avatar className="avatar" alt="Remy Sharp" src={day.day.condition.icon} />
              <h4>{`${day.day.avgtemp_c} C°`}</h4>

              <h4>{day.day.condition.text}</h4>
            </Grid>
          ))
          
          }
        </Grid>
      }
    </>
  );
}

export default ForecastWeather