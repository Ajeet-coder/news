import React from "react";
import { TextField } from "@mui/material";

function CustomTextFeild(props: any) {
  return (
    <TextField
      label={props.lable}
     
      placeholder={props.placeholder}
    
      fullWidth
      required
    />
  );
}

export default CustomTextFeild;
