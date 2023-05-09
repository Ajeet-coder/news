import { Avatar, Grid, Paper, TextField, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useRegisterMutation } from '../../redux/slice/userSlice';
import axios from 'axios';

import { useStyles } from './ragisterStyle';
import { Router, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';
import { USER_SIGN_UP_INITIAL_VALUE } from '../../constants/UserConstants';



const initialValues = USER_SIGN_UP_INITIAL_VALUE;

const Register:React.FC= () => {

  const nevigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {


      console.log("Step 1" + email)

      let formdata = {
        email: values.email,
        password: values.password
      }
      addNewUser(formdata).unwrap().then((res) => { nevigate("/"); console.log("res    =>>> " + JSON.stringify(res, null, 2)) }).catch((error) => { console.log("errroring    =>>> " + JSON.stringify(error, null, 2)) })
      action.resetForm();
      console.log("valueee=>>>>>>>>  " + values.email)

    },
  });


  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
  const avatarStyle: any = { backgroundColor: '#1bbd7e' };


  const btnStyle: any = { margin: '8px 0' }


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState("");

  const [addNewUser, response] = useRegisterMutation();
  const navigate = useNavigate()

  

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid  >
          <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit}>

          <TextField label=' Email' name='email' style={btnStyle} placeholder='Enter Email' type='email' value={values.email} onChange={handleChange} onBlur={handleBlur} fullWidth />
          {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
          <TextField label='password' name='password' placeholder='Enter password' type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} fullWidth />
          {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
          <TextField label=' confirm password' name='confirm_password' placeholder='Enter password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} type='password' fullWidth />
          {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}

          <Button type='submit' style={btnStyle} color='primary' variant='contained' fullWidth>Sign Up!</Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register
