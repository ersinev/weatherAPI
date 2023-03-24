import "@mui/material";
import { useEffect, useState } from "react";
import { getForecast, getRealTime } from "./services/weatherApi";
import Button from "@mui/material/Button";
import { RealTimeDataObject } from "./types/RealTimeWeather";
import { Forecast } from "./types/ForecastWeather";
import { Routes, Route } from "react-router-dom";
import "../src/styles.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Authorization/Login";
import Home from "./components/HomePage/Home";

import SignUp from "./components/Authorization/SignUp";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
function App() {
  const [userLoginEmail, setuserLoginEmail] = useState("")
  const [userLoginPassword, setuserLoginPassword] = useState("")

  const [userInput, setuserInput] = useState("" as string);
  const [realTimeData, setrealTimeData] = useState({} as RealTimeDataObject);
  const [forecastData, setforecastData] = useState({} as Forecast);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const getRealTimeWeather: any = (userInput: string) => {
    if (userInput === "" || userInput === undefined) {
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
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  console.log(userLoginEmail)
  console.log(userLoginPassword)


  return (
    <>
      <Layout logout={setisLoggedIn}>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/news" element={<News/>} />

          {isLoggedIn ? (
            <>
              

              <Route path="/profile" element={<Profile/>} />

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
          ) : (
            <Route path="/" element={<Login userLoginEmail={setuserLoginEmail} userLoginPassword={setuserLoginPassword} login={setisLoggedIn} />} />
          )}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
