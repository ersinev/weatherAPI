import "@mui/material";
import { useEffect, useState } from "react";
import { getForecast, getRealTime } from "./services/weatherApi";
import Button from "@mui/material/Button";
import { RealTimeDataObject } from "./types/RealTimeWeather";
import { Forecast } from "./types/ForecastWeather";
import { Routes, Route } from "react-router-dom";
import "../src/styles.css";
import Layout from "./components/Layout/Layout";
import Login from "./Login";
import Home from "./components/HomePage/Home";
function App() {
  const [userInput, setuserInput] = useState("" as string);
  const [realTimeData, setrealTimeData] = useState({} as RealTimeDataObject);
  const [forecastData, setforecastData] = useState({} as Forecast);
  const [isLoggedIn, setisLoggedIn] = useState(true)
 




  const getRealTimeWeather: any = (userInput: string) => {
    if (userInput == "" || userInput == undefined) {
    } else {
      getRealTime(userInput).then((data) => {
        setrealTimeData(data);
      });
    }
  };

  const getForecastWeather = (input: string) => {
    getForecast(input).then((data: any) => {
      setforecastData(data.forecast.forecastday);
      console.log(data.forecast.forecastday);
    });
  };

  useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])
  
 
  return (
    <>
      <Layout isLoggedIn={setisLoggedIn}>
        <Routes>
          
          {isLoggedIn?
          <>
          <Route path="/profile" element={<Login isLogged={setisLoggedIn} />} />
          <Route
            path="/"
            element={
              <>
                <Home
                  setInput={setuserInput}
                  realtimedata={realTimeData}
                  forecastData={forecastData}
                  cityInput={userInput}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                    getRealTimeWeather(userInput);
                    getForecastWeather(userInput);
                  }}
                >
                  Get data
                </Button>
              </>
            }
          />
          </>

          :
          
          <Route path='/' element={<Login/>} />
        }
        
        </Routes>
      </Layout>
    </>
  );
}

export default App;
