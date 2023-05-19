import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControl,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import "react-toastify/dist/ReactToastify.css";

import { login, useLoginUserMutation } from "../../redux/slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import _ from "lodash";
import { btnStyle, paperStyle } from "./LoginStyle";
import { textFeildObject } from "../../Input/TextInputObjects";
import CustomTextFeild from "../../Input/CustomTextFeild/CustomTextFeild";

interface ApiResponse {
  data: {
    starus: number;
    access_token: string;
  };
}
const Login: React.FC = () => {
  //states for login credentials
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  //Hookks provided by the rtk query for Login
  const [loginUser, { error }] = useLoginUserMutation();

  const nevigate = useNavigate();

  //form handler it is handling login form data
  const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("step 1");
    let formdata = {
      email,
      password,
    };

    try {
      const res = await loginUser(formdata);
      if (!error) {
        const response = res as ApiResponse;
        const access_token = response?.data?.access_token;
        sessionStorage.setItem("access_token", access_token);

        nevigate("/home");
      } else {
        nevigate("/");
      }
    } catch (error) {
      nevigate("/");
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>

        <FormControl component="form" onSubmit={handleUserLogin}>
          <TextField
            label="Email"
            style={btnStyle}
            placeholder="Enter Email"
            onChange={(e) => setemail(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="password"
            placeholder="Enter password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            autoComplete="on"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />

          <Button
            type="submit"
            title="Sign In"
            style={btnStyle}
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign In
          </Button>
          {error && <p>Error: Incorrect email or password</p>}
        </FormControl>
        <Typography></Typography>
        <Typography>
          Do you have an account ?<Link to={"register"}>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
