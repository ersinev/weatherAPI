
import CitySearchInput from "./CitySearchInput"
import ForecastWeather from "./ForecastWeather"
import Weather from "./Weather"


function Home(props:any) {
  return (
   <>
    <CitySearchInput setInput={props.setInput}/>
    <Weather realtimedata={props.realtimedata}/>
    <ForecastWeather forecastData={props.forecastData} cityInput={props.cityInput}/>
    
   </>
  )
}

export default Home