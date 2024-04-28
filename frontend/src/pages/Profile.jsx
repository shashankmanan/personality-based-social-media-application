import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { getUserProfile } from '../API/profileApi';

const MyProfilePage = () => {
  const [firstname , setFirstname] = useState('')
  const [lastname , setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [address , setAddress] = useState('')
  const [phonenumber , setPhonenumber] = useState('')
  const [birthday,setBirthday] = useState('')
  const [bio,setBio] = useState('')
  const [username,setUsername] = useState(localStorage.getItem("username"))
  
  useEffect(
    () => {
      setUsername(localStorage.getItem('username'))
      populateUserInfo()
    }
  )
  
  const populateUserInfo = async () => {
    const profileInfo = await getUserProfile(username)
    // console.log(profileInfo)
    if(profileInfo !== "PROFILE_NOT_FOUND") {
      console.log(profileInfo)
      const {FirstName, LastName , Address , PhoneNumber , Bio ,  Birthday} = profileInfo
      setFirstname(FirstName)
      setLastname(LastName)
      setAddress(Address)
      setPhonenumber(PhoneNumber)
      setBio(Bio)
      setBirthday(Birthday)
    }
  }
  const handleSubmit = () => {
    console.log("button clicked")
    console.log( {
      "username" : username ,
      "FirstName" : firstname,
      "LastName" : lastname,
      "Address" : address,
      "PhoneNumber" : phonenumber,
      "Birthday" : birthday,
      "Bio" : bio
  })
  }
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
              alt="User Avatar"
              src="https://via.placeholder.com/150"
              sx={{ width: 150, height: 150 }}
            />
          </Box>
          <Button variant="outlined" sx={{ mt: 2 }}>
            Upload Picture
          </Button>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            variant="outlined"
            value = {firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            variant="outlined"
            value = {lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Email Address"
            variant="outlined"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Additional Information
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            variant="outlined"
            value = {address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            variant="outlined"
            value = {phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
              />
          <TextField
            fullWidth
            margin="normal"
            label="Birthday"
            variant="outlined"
            value = {birthday}
            onChange={(e) => setBirthday(e.target.value)}      
            />
          <TextField
            fullWidth
            margin="normal"
            label="Bio"
            multiline
            rows={4}
            variant="outlined"
            value = {bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick ={handleSubmit}>
        Save Changes
      </Button>
    </Box>
  );
};

export default MyProfilePage;
