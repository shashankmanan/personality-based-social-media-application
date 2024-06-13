import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import axios from 'axios'

export default function Connect() {
  const ref = React.useRef(null);
  const [profiles,setProfiles] = React.useState([])
  const [userProfile,setUserProfile] = React.useState()
  /*
  const populateProfiles = async () => {
    try {
      const tribe = localStorage.getItem("tribe")
      if(!tribe)
          return
      const baseURL = "http://localhost:5000/api/tribes/viewall"
      const response = await axios.post(baseURL , {"tribe" : tribe})
      // console.log(response)
      if(response.status == 200)
          setProfiles(response.data)  
    }
    catch(error) {
      console.log(error)
    }
  }*/
    const populateProfiles = async () => {
      try {
        const tribe = localStorage.getItem("tribe");
        if (!tribe) return;
  
        const baseURL = "http://localhost:5000/api/tribes/viewall";
        const response = await axios.post(baseURL, { tribe });
  
        if (response.status === 200) {
          const profilesWithBio = await Promise.all(response.data.map(async (profile) => {
            const bioResponse = await getUserBio(profile.username);
            console.log(bioResponse)
            return {
              ...profile,
              bio: bioResponse.data.Bio
            };
          }));
          console.log(profilesWithBio)
          setProfiles(profilesWithBio);
        }
      } catch (error) {
        console.log(error);
      }
    };
  const getUserBio = async (username) => {
    try {
      const baseURL = "http://localhost:5000/api/users/profile/get"
      const response = await axios.post(baseURL , {"username" : username})
      return response
    }
    catch(error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    if(profiles.length == 0) {
      populateProfiles()  
    }
    console.log(profiles)
  } , [profiles]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {profiles.map(({username,bio}, index) => (
          <ListItemButton key={index }>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" />
            </ListItemAvatar>
            <ListItemText primary={username} secondary={bio ? bio : "Hey! Lets connect!!"}/>
          </ListItemButton>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      </Paper>
    </Box>
  );
}
