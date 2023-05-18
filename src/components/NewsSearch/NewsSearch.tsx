import React, { useEffect, useState } from "react";
import "./NewsSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { useGetSerchedNewsQuery } from "../../redux/slice/NewsSearchSlice";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";
import _ from "lodash";
import { addSearchNewsValue } from "../../redux/slice/SerchedValue";
import NoDataFound from "./NoDataFound/NoDataFound";

const NewsSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [lastFiveSearch, setLastFiveSearch] = useState<string[]>([]);
  const dispatch = useDispatch();

  //here selecting type of news
  const searchedNews = useSelector((state: any) => state.searchedvalue.value);

  const allSearchedNews = useGetSerchedNewsQuery(searchedNews);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (lastFiveSearch.length < 5) {
      lastFiveSearch.push(query);
    } else {
      lastFiveSearch.shift();
      lastFiveSearch.push(query);
    }
    dispatch(addSearchNewsValue(query));
  };
  if (allSearchedNews.isLoading) return <div>Loading....</div>;

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {lastFiveSearch.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>

      {allSearchedNews.isSuccess ? (
        <Grid container spacing={3}>
          {_.values(allSearchedNews.data.response.docs).map(
            (item: any, index: any) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                      sx={{ maxWidth: 330, mt: 5 }}
                      className="card-container"
                    >
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            A
                          </Avatar>
                        }
                        title={item.abstract}
                        subheader={item.source}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {item.lead_paragraph}
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
                  </Grid>
                </>
              );
            }
          )}
        </Grid>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default NewsSearch;
