import React from "react";
import {
  Avatar,
  Button,
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
import { useNavigate } from "react-router-dom";

const NewsCard = (props: any) => {
  const navigate = useNavigate();
  const { title, multimedia, updated_date, abstract } = props.data;
  const index = props.index;

  //Navigating to the News details page
  const getCardDetails = () => {
    navigate(`/details/${index}`);
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          mt: 5,
          minHeight: 500,
          maxHeight: 500,
          marginTop: "100px",
        }}
        className="card-container"
        onClick={getCardDetails}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {title.charAt(0)}
            </Avatar>
          }
          title={title}
          subheader={updated_date}
        />
        <CardMedia
          component="img"
          height="194"
          image={
            null !== multimedia
              ? multimedia[0].url
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mtGoOLN5x15OeZknP7-9sNwaziiEp-tas_ObTrVm&s"
          }
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {abstract}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default NewsCard;
