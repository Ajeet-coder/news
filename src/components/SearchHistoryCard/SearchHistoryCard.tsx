import React from "react";
import {
  
  CardHeader,
 
} from "@mui/material";

interface ISearchHistoryCardProps {
  search: string;
}
function SearchHistoryCard(props: ISearchHistoryCardProps) {
  return (
    <CardHeader
      title={props.search}
      // subheader={updated_date}
    />
  );
}

export default SearchHistoryCard;
