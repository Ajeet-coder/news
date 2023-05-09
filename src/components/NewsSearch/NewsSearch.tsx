import React, { useEffect, useState } from 'react'
import './NewsSearch.css'
import { useDispatch, useSelector } from 'react-redux';
import { useGetSerchedNewsQuery } from '../../redux/slice/NewsSearchSlice';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';
import _ from 'lodash'
import { addSearchNewsValue } from '../../redux/slice/SerchedValue';
import SearchHistoryCard from '../SearchHistoryCard/SearchHistoryCard';

const  NewsSearch:React.FC=()=> {

    const [query, setQuery] = useState('');
    const [lastFiveSearch, setLastFiveSearch] = useState<string[]>([]);
    const dispatch = useDispatch()

    //here selecting type of news 
    const searchedNews = useSelector((state: any) => state.searchedvalue.value)
   


    const allSearchedNews = useGetSerchedNewsQuery(searchedNews);

    //console.log("ALLLLLLLLLLLLL>>>>>>>>>> " + JSON.stringify(allSearchedNews.data.response.docs[0], null, 2))
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setIsSerching(true);
        //  e.preventDefault()
        //console.log(searchNewsValue);
        if (lastFiveSearch.length < 5) {
            lastFiveSearch.push(query)
        } else {
            lastFiveSearch.shift()
            lastFiveSearch.push(query)
        }
        dispatch(addSearchNewsValue(query));
    }
    if (allSearchedNews.isLoading) return <div>Loading....</div>

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
                // const val = allSearchedNews.data.response.docs[0]
                // console.log("vallllllllllll  " + JSON.stringify(val, null, 2))



                <Grid container spacing={3}>



                    {_.values(allSearchedNews.data.response.docs).map((item: any, index: any) => {


                        return (
                            <>
                                <Grid item xs={12} sm={6} md={4} lg={3}>

                                    <Card sx={{ maxWidth: 330, mt: 5 }} className='card-container' >
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                                    A
                                                </Avatar>
                                            }
                                            title={item.abstract}
                                            subheader={item.source}
                                        />


                                        {/* <CardMedia
                                                component="img"
                                                height="194"
                                                image= {(Object.keys(item.multimedia).length>0) ? item.multimedia[0].url :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mtGoOLN5x15OeZknP7-9sNwaziiEp-tas_ObTrVm&s"}
                                                alt="Paella dish"
                                            /> */}
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
                        )

                    })}
                </Grid>





            ) :
                <h1>gi</h1>
            }
        </>
    )
}

export default NewsSearch
