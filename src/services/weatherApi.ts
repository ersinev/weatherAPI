import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const options :AxiosRequestConfig = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: 'london'},
    headers: {
      'X-RapidAPI-Key': 'b54c65a96emsh3c731c2d8d3beebp16942djsn3abd168182c9',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

export const getRealTime = async()=>{
    try {
        const response: AxiosResponse = await axios.request(options);
        return (response.data);
      } catch (error) {
        console.error(error);
      }
    
    

}