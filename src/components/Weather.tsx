import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import {getRealTime} from '../services/weatherApi'
import { Current, Location } from "../types/RealTimeWeather";
function Weather() {
   const [dataLocation, setdataLocation] = useState({}as Location)
   const [dataCurrent, setdataCurrent] = useState({} as Current) 


    const getRealTimeWeather= ()=>{
        getRealTime().then((data)=>{
            console.log(data.location)
            setdataLocation(data.location)
        })
    }


  return (
    <>
      <Grid container>
        <Grid container>
        <Grid item xs={6}>
            <Grid item xs={3}>{`City: ${dataLocation.name}`}</Grid>
            <Grid item xs={3}>{`City: ${dataLocation.country}`}</Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={3}>Icon</Grid>
            <Grid item xs={3}>Degree</Grid>
          </Grid>
          <Grid item xs={6}>
          <Grid item xs={3}>{`Local Time: ${dataLocation.localtime}`}</Grid>
          <Grid item xs={3}>Hour</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Button onClick={getRealTimeWeather}>Get data</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Weather;
