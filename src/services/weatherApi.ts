import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const realTimeOptions :AxiosRequestConfig = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: ''},
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

export const getRealTime = async(input:any)=>{

  console.log(input)
    try {
        const response: AxiosResponse = await axios.request({...realTimeOptions, params:{q:input}});
        return (response.data);
      } catch (error) {
        console.error(error);
      }
    
    

}