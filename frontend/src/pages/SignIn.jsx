import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import NavBar from "../components/NavBar"
import FootBar from "../components/FootBar"
import { useState } from 'react';
import { signInUser } from '../API/usersApi';
import { Alert } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignInSide() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  const [showErrorMessage,setShowErrorMessage] = useState(false)
  const [showSuccessMessage,setShowSuccessMessage] = useState(false)

   const navigate = useNavigate()

  const handleSubmit = async (event) => {
     event.preventDefault();
	 const APIRes = await signInUser({
		"username": username,
		"password": password,
	  }) 
	  console.log(APIRes)
	 if(APIRes.isAuth) {
		setShowSuccessMessage(true)
		setTimeout(() => {
			navigate("/account/home");
		  }, 1000);
	  }
	  else {
		setErrorMessage(APIRes.error)
		setShowErrorMessage(true)
	  }
  };

  return (
    <>
    <NavBar />
    <div style={{textAlign:"start"}}>
      <Grid container component="main" sx={{ height: '100vh' }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              textAlign:"left",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
			  Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
				onChange={(e) =>setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) =>setPassword(e.target.value)}
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              {  showErrorMessage ? <Alert variant="filled" severity="error">
                {errorMessage}
              </Alert> : <></>
              }
			  {  showSuccessMessage ? <Alert variant="filled" severity="success">
                {"SIGNING IN!!"}
              </Alert> : <></>
              } 
			  <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
    <FootBar />
    </>
  );
}