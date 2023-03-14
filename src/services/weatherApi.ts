import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const realTimeOptions :AxiosRequestConfig = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: ''},
    headers: {
      'X-RapidAPI-Key': 'b54c65a96emsh3c731c2d8d3beebp16942djsn3abd168182c9',
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