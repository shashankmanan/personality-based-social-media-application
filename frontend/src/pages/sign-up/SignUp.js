import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Alert, DialogContent } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import { useState } from 'react';
import NavBar from "../../components/NavBar"
import FootBar from "../../components/FootBar"
import { useNavigate } from 'react-router-dom';
import {Dialog,DialogActions,DialogContentText,DialogTitle} from '@mui/material';
import { createUserApi } from '../../API/usersApi';

export default function SignUp() {
    const [errorMessage,setErrorMessage] = useState('')
    const [successMessage,setSuccessMessage] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    const [Uname,setUname] = useState('')
    const [Email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const [cpwd,setCpwd] = useState('')
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate("/home")
    setOpen(false);
  };
    const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;
    
    if (Uname === ""|| Uname.length < 1) { 
      setErrorMessage("Enter valid username")
      isValid = false;
    }

    if (Email === "" || !/\S+@\S+\.\S+/.test(Email)) { 
      setErrorMessage("Enter valid Email")
      isValid = false;
    }

    if (pwd === ""|| pwd.length < 6) { 
      setErrorMessage("Enter valid Password")
      isValid = false;
    }
    if(pwd != cpwd) {
      setErrorMessage("Passwords are not matching")
      isValid = false;
    }
      return isValid
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(! validateInputs()) {
        console.log("Something went wront")
        setShowErrorMessage(true)
        return;
    }
    const response = await createUserApi({
      "username" : Uname ,
      "email" : Email ,
      "password" : pwd 
  })
    console.log(response)
    if(response.proceed) {
      setSuccessMessage(true)
      handleClickOpen()
    } else {
      if(response.error.attribute.username)
        setErrorMessage(`Username already exists , please choose a new one`)
        if(response.error.attribute.email)
        setErrorMessage(`Email already exists , please choose a new one`)
    }
  };

  return (
    <>
      <NavBar />
      <Stack
        component="main"
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))'
              : 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.3), hsl(220, 30%, 5%))',
          pb: { xs: 12, sm: 0 },
        })}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: { xs: 'static', sm: 'fixed' },
            width: '100%',
            p: { xs: 2, sm: 4 },
          }}
        >
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            component="a"
            href="/signin"
          >
            Back
          </Button>
        </Stack>
        <Stack
          justifyContent="center"
          sx={{ height: { xs: '100%', sm: '100dvh' }, p: 2 }}
        >
          <Card
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: { xs: '100%', sm: '450px' },
              p: { xs: 2, sm: 4 },
              gap: 4,
              boxShadow:
                theme.palette.mode === 'light'
                  ? 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px'
                  : 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
            })}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              {/* <form onSubmit={handleSubmit}> */}
              {successMessage ? 
                  <Dialog
                  open={open}
                   onClose={handleClose}
                  //onClose = { navigate('/home') }
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Welcome to Expressify!!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Succesfully Registered!!    
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      Let's Go!!
                    </Button>
                  </DialogActions>
                </Dialog>
              : <></>}

              <TextField id="outlined-basic" label="Username:" variant="outlined" onChange={(e) => setUname(e.target.value)} required />
              <TextField id="outlined-basic" label="Email:" variant="outlined" onChange={(e) => setEmail(e.target.value)} required />
              <TextField id="outlined-basic" label="Password:" variant="outlined" onChange={(e) => setPwd(e.target.value)}required />
              <TextField id="outlined-basic" label="Confirm Password:" variant="outlined" onChange={(e) => setCpwd(e.target.value)} required />
              {  showErrorMessage ? <Alert variant="filled" severity="error">
                {errorMessage}
              </Alert> : <></>
              } 
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                Sign up
              </Button>
              {/* </form> */}
              <Link
                href="/signin"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Already have an account? Sign in
              </Link>
            </Box>
            <Divider>
              <Typography color="text.secondary">or</Typography>
            </Divider>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => alert('Sign up with Google')}
                startIcon={<GoogleIcon />}
              >
                Sign up with Google
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => alert('Sign up with Facebook')}
                startIcon={<FacebookIcon />}
              >
                Sign up with Facebook
              </Button>
            </Box>
          </Card>
        </Stack>
      </Stack>
    <FootBar />
    </>
  );
}
