import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
export default function FootBar() {
  return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            height:"auto" ,
            mt: 'auto',
            backgroundColor: "rgba(1, 1, 1, 1)"
        }}
        >
            <Container maxWidth="sm"> 
                <Typography  color="white">
                    Contact us at
                </Typography>
                <LocalPhoneIcon fontSize='large' style={{color:"white"}}color=""></LocalPhoneIcon>
                <InstagramIcon fontSize='large' color="secondary"></InstagramIcon>
            </Container>
            <br />
            <Container maxWidth="sm">
                <Copyright />
                <Typography variant="body1" color="white">
                    Developed by shashank_manan
                </Typography>
                <Link to="https://github.com/shashankmanan"><GitHubIcon fontSize='large'/></Link>
            </Container>
        </Box>
  );
}
