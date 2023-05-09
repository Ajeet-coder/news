import { makeStyles } from "@mui/material";

export const useStyles = makeStyles((theme:any) => ({
    root: {
      "& > *": {
        padding: 20, height: '70vh', 
        width: 280, margin: "20px auto"
      },
    },
  }));