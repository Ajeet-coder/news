import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useParams } from "react-router-dom";
import { useGetPostsByTypeQuery } from "../../redux/slice/NewsCheckSlice";
import { useSelector } from "react-redux";
import "./NewsDetails.css";
import LoadingScreen from "../Loading/LoadingScreen";

const NewsDetails: React.FC = () => {
  const index: any = useParams();

  const news = useSelector((news: any) => news.newsType.newsType);
  const NewYorkNews = useGetPostsByTypeQuery(news);

  if (NewYorkNews.isLoading) return <LoadingScreen />;
  const NewsDetails = NewYorkNews.data.results[index.index];

  if (NewsDetails.isLoading) return <LoadingScreen />;
  return (
    <Card sx={{ maxHeight: 320, mt: 8 }} className="card-container">
      <CardHeader
        className="title"
        title={NewsDetails.title}
        subheader={NewsDetails.updated_date}
      />
      <CardMedia
        component="img"
        className="img"
        height="194"
        image={
          null !== NewsDetails.multimedia
            ? NewsDetails.multimedia[0].url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mtGoOLN5x15OeZknP7-9sNwaziiEp-tas_ObTrVm&s"
        }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {NewsDetails.abstract}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <ExpandMoreIcon />
      </CardActions>
    </Card>
  );
};

export default NewsDetails;
