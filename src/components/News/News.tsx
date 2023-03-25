import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function News() {
  const [singleTopic, setsingleTopic] = useState("");
  const [news, setnews] = useState([] as any);
  const [latelyNews, setlatelyNews] = useState([] as any);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const currentDate = `${year}-${month}-${day}`;

  const getdata = async (topic: any) => {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=${`${year}-${month}-${today}`}&sortBy=publishedAt&apiKey=c0936d28ce4548bd94f3b38fc87554d1`
    );
    let data = await res.json();
    setnews(data.articles);
    console.log(data.articles);
    console.log(news);
  };

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c0936d28ce4548bd94f3b38fc87554d1`
      );
      let data = await res.json();
      console.log(data.articles);
      setlatelyNews(data.articles);
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid sx={{backgroundColor:"rgb(148, 185, 255)"}}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search a topic"
              variant="outlined"
              sx={{backgroundColor:"whitesmoke"}}
              onChange={(e: any) => setsingleTopic(e.target.value)}
            />
          </Box>

          <Button
            sx={{ height: "56px", m: 1, width: "25ch" }}
            variant="contained"
            onClick={() => {
              getdata(singleTopic);
            }}
          >
            Get data
          </Button>
        </Grid>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {news.length > 0
            ? news.map((eachnew: any) => {
                return (
                  <Card sx={{ maxWidth: 345, margin: "5px" }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={eachnew.urlToImage}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {eachnew.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {eachnew.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={eachnew.url} target="_blank">
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                );
              })
            : latelyNews.map((eachnew: any) => {
                return (
                  <Card sx={{ maxWidth: 345, margin: "5px" }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={eachnew.urlToImage}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {eachnew.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {eachnew.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={eachnew.url} target="_blank">
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
        </Grid>
      </Grid>
    </>
  );
}

export default News;
