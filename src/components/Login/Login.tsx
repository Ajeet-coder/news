import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoginUserMutation } from '../../redux/slice/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import _ from 'lodash';







const Login: React.FC = () => {

    //Styling for paper and 
    const paperStyle: any = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const btnStyle: any = { margin: '8px 0' }


    //states for login credentials
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");

    //Hookks provided by the rtk query for Login
    const [loginUser, { error, isLoading }] = useLoginUserMutation();


    const nevigate = useNavigate();


    //form handler it is handling login form data
    const handleUserLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formdata = {
            email,
            password
        }
        //calling Ligin API for user login
        loginUser(formdata).unwrap().
            then((res) => {
                localStorage.setItem("access_token", res.access_token);
                // localStorage.setItem("component", "Home");
                nevigate("/home")

            })
            .catch((error) => {
                <ToastContainer />

                console.log("errror    =>>> " + JSON.stringify(error, null, 2))
            })

    }



    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid  >
                    <Avatar className='avatar' ><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>

                <form onSubmit={handleUserLogin}>
                    <TextField label='Email' style={btnStyle} placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} fullWidth required />

                    <TextField label='password' placeholder='Enter password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required autoComplete='on' />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                    <Button type='submit' style={btnStyle} color='primary' variant='contained' fullWidth>Sign In</Button>
                    {error && <p>Error: Incorrect email or password</p>}
                </form>
                <Typography>


                </Typography>
                <Typography>Do you have an account ?


                    <Link to={"register"}>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
