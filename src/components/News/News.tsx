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
  const getdata = async (topic: any) => {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2023-02-23&sortBy=publishedAt&apiKey=c0936d28ce4548bd94f3b38fc87554d1`
    );
    let data = await res.json();
    setnews(data.articles);
    console.log(data.articles);
    console.log(news);
  };

  return (
    <>
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
          onChange={(e: any) => setsingleTopic(e.target.value)}
        />
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          getdata(singleTopic);
        }}
      >
        Get data
      </Button>

      {/* <Grid container >
        {news?
          news.map((eachnew: any) => {
            return (
              <Card sx={{ maxWidth: 345, margin:'5px' }}>
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
          }):<h1>Enter a valid topic please</h1>}
      </Grid> */}
    </>
  );
}

export default News;
