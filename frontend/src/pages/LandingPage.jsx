import React from 'react'
import NavBar from '../components/NavBar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import background from '../resources/bg-landingpg.jpg'
import "../styles/landingPage.css"
import FootBar from '../components/FootBar'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
	<div style={{backgroundColor:"#282c34", opacity:"1px"}}>
    	<NavBar />
		<div style={{ backgroundImage:`url(${background})`, padding:"100px",marginBottom : "20px"}}>
		<Typography variant="h1" className='heading-catchline' gutterBottom >
			Find Friends that get you!
      	</Typography>
		</div>
			<Link to = "/signin">	
				<Button  variant="contained" color="secondary" style={{height:"100px" , fontSize:"27px",margin:"10px"}}>
					Lets get Connecting!
				</Button>
			</Link>
			<hr />
			<div>
				<Typography variant ="h2" style={{margin:"50px"}} className="features">
					Try Expressify!!
				</Typography>
				<div className="features-box">
					<div>
						<Typography  variant='h4' style={{margin:"20px"}} className="features">
							AI Based matching
						</Typography>
						<PeopleAltIcon fontSize='large' className="features"/>
						<Typography variant="h6" className="features">
							Expressify utilises a unique <br />personality based recommendation system
						</Typography>
					</div>
					<div>
						<Typography  variant='h4' style={{margin:"20px"}} className="features">
							Connections that last a lifetime
						</Typography>
						<GroupWorkIcon fontSize='large' className="features"/>
						<Typography variant="h6" className="features">
							your "yeh jawani hai diwani" style moment <br/> is just a recommendation away! 
						</Typography>
					</div>
					<div>
						<Typography  variant='h4' style={{margin:"20px"}} className="features"> 
							Find your tribe
						</Typography>
						<GroupsIcon fontSize='large' className="features"/> 
						<Typography variant="h6" className="features">
							Introvert? Extrovert? AMBIVERT!?!? <br />
							join expressify and find your tribe
						</Typography>
					</div>
				</div>
			</div>
		<FootBar />
	</div>
  )
}
