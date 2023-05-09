import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';


interface ISearchHistoryCardProps{
    search:string
}
function SearchHistoryCard(props:ISearchHistoryCardProps) {
  return (
    // <Card sx={{ maxWidth: 100, mt: 1 }} className='card-container'  >
                <CardHeader
                    
                     title={props.search}
                    // subheader={updated_date}
                />
                
            // </Card>
  )
}

export default SearchHistoryCard
