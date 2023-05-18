import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormControl
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useRegisterMutation } from "../../redux/slice/userSlice";
import axios from "axios";


import { Router, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { USER_SIGN_UP_INITIAL_VALUE } from "../../constants/UserConstants";
import { avatarStyle, paperStyle } from "./ragisterStyle";

const initialValues = USER_SIGN_UP_INITIAL_VALUE;

const Register: React.FC = () => {
  const nevigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        console.log("Step 1" + email);

        let formdata = {
          email: values.email,
          password: values.password,
        };

        try {
          const res = await addNewUser(formdata);
          if (!error) {
            //sessionStorage.setItem("access_token", access_token);
            nevigate("/");
          } else {
            console.log("error     =>>> " + JSON.stringify(error, null, 2));
          }
        } catch (error) {
          console.log(
            "Runtime exception found     =>>> " + JSON.stringify(error, null, 2)
          );
        }
        action.resetForm();
      },
    });


  const btnStyle: any = { margin: "8px 0" };
  const [email, setemail] = useState("");
  const [error, setError] = useState("");

  const [addNewUser, response] = useRegisterMutation();
  const navigate = useNavigate();

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <FormControl component="form"  onSubmit={handleSubmit}>
          <TextField
            label=" Email"
            name="email"
            style={btnStyle}
            placeholder="Enter Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {/* <p>{errors.email}</p> */}
          {errors.email && touched.email ? (
            <Typography>{errors.email}</Typography>
          ) : null}
          <TextField
            label="password"
            name="password"
            placeholder="Enter password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.password && touched.password ? (
            <Typography>{errors.password}</Typography>
          ) : null}
          <TextField
            label="confirm-password"
            style={btnStyle}
            name="confirm_password"
            placeholder="reenter  password"
            type="password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.confirm_password && touched.confirm_password ? (
            <Typography>{errors.confirm_password}</Typography>
          ) : null}

          <Button
            type="submit"
            style={btnStyle}
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign Up!
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Register;
