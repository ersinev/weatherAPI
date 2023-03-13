import '@mui/material'
import Weather from './components/Weather';
import CitySearchInput from './components/CitySearchInput';
import { useState } from 'react';
function App() {
  
  const [userInput, setuserInput] = useState("" as string)  
  return (
    <>
    <CitySearchInput setInput={setuserInput}/>
    <Weather cityInput={userInput}/>
    </>
    
  );
}

export default App;
