import "@mui/material";
import Weather from "./components/HomePage/Weather";
import CitySearchInput from "./components/HomePage/CitySearchInput";
import { useState } from "react";
import ForecastWeather from "./components/HomePage/ForecastWeather";
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

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Login />} />
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
        </Routes>
      </Layout>
    </>
  );
}

export default App;
