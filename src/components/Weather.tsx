import { Grid } from "@mui/material";

import { useEffect, useState } from "react";

import { Current, Location } from "../types/RealTimeWeather";
import Avatar from "@mui/material/Avatar";
import { RealTimeDataObject } from "../types/RealTimeWeather";

interface WeatherProps {
  realtimedata: RealTimeDataObject;
  
}

function Weather(props: WeatherProps) {
  const [dataLocation, setdataLocation] = useState<Location | undefined>(
    undefined
  );
  const [dataCurrent, setdataCurrent] = useState<Current | undefined>(
    undefined
  );

  useEffect(() => {
    setdataLocation(props.realtimedata.location);
    setdataCurrent(props.realtimedata.current);
    
  }, [props.realtimedata]);

  if (!dataLocation || !dataCurrent) {
    return <></>
    
  }

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
                {dataCurrent.condition.text}
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
      ) : 
        "" 
      }
      

    </>
  );
}

export default Weather;
