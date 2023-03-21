import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function News() {
  const [news, setNews] = useState([]);
 
  const getdata = ()=>{
    var url = 'https://api.currentsapi.services/v1/latest-news?' +
    'language=us&' +
    'apiKey=D7Wi4B_TOhWbjcmznf_LJVTt3f7OQ2_rmw7pEtDkKFma7czz';
    var req = new Request(url);
    fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  }
  

  return (
    <>
     
      <Button onClick={()=>{getdata()}}>Get data</Button>
    </>
  );
}

export default News;





