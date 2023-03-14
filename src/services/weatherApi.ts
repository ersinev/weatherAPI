import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

// ---------- REAL TIME WEATHER API -----------------
const realTimeOptions :AxiosRequestConfig = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: ''},
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

export const getRealTime = async(input:string)=>{

  
    try {
        const response: AxiosResponse = await axios.request({...realTimeOptions, params:{q:input}});
        return (response.data);
      } catch (error:any) {
        
        return(error.message)
      }
}

// ---------- FORECAST WEATHER API -----------------

const ForecastOptions = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: '', days: '3'},
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};


export const getForecast = async(input:string)=>{

  try {
    const response :AxiosResponse= await axios.request({...ForecastOptions, params:{q:input,days:3}})
    return response.data
    
    
  } catch (error) {
    console.log(error)
  }
}




    
