import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { getRealTime } from "../services/weatherApi";
import { Current, Location } from "../types/RealTimeWeather";
import Avatar from "@mui/material/Avatar";

interface WeatherProps {
  cityInput: any;
}
function Weather(props:WeatherProps) {
  const [dataLocation, setdataLocation] = useState({} as Location);
  const [dataCurrent, setdataCurrent] = useState({} as Current);

  const getRealTimeWeather = (userInput: any) => {
    getRealTime(userInput).then((data) => {
      console.log(data.location);
      setdataLocation(data.location);
      setdataCurrent(data.current);
    });
  };

  return (
    <>
      {dataLocation.name != undefined ? (
        <Grid container>
          <Grid container>
            <Grid item xs={6}>
              <Grid item xs={3}>{`City: ${dataLocation.name}`}</Grid>
              <Grid item xs={3}>{`Country: ${dataLocation.country}`}</Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={3}>
                <Avatar alt="Remy Sharp" src={dataCurrent.condition.icon} />
              </Grid>
              <Grid item xs={3}>
                {`${dataCurrent.temp_c}C°`}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={3}>{`Local Time: ${dataLocation.localtime}`}</Grid>
              <Grid item xs={3}>
                Hour
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      ) : (
        ""
      )}
      <Button onClick={()=>getRealTimeWeather(props.cityInput)}>Get data</Button>
    </>
  );
}

export default Weather;
