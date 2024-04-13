import React from 'react'
import NavBar from '../components/NavBar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import background from '../resources/bg-landingpg.jpg'
import "../styles/landingPage.css"
import FootBar from '../components/FootBar'

export default function LandingPage() {
  return (
	<div style={{backgroundColor:"#282c34", opacity:"1px"}}>
    	<NavBar />
		<div style={{ backgroundImage:`url(${background})`, padding:"100px"}}>
		<Typography variant="h1" gutterBottom color={"black"} fontWeight={"bold"}>
			Find Friends that get you!
      	</Typography>
		</div>
		<Typography variant="h3" fontWeight={"bold"} color={"pink"} gutterBottom>
			Lets get Connecting! 
      	</Typography>
			{/* <Button>Magic starts here</Button> */}
			<Button  variant="contained" style={{height:"100px" , fontSize:"27px",margin:"10px"}}>Magic starts here</Button>
			<hr />
			<div>
				<Typography variant ="h2" style={{margin:"50px"}}>
					Try Expressify!!
				</Typography>
				<div className="features-box">
					<div>
						<Typography  variant='h4' style={{margin:"20px"}}>
							AI Based matching
						</Typography>
						<Typography variant="h6">
							Expressify utilises a unique <br />personality based recommendation system
						</Typography>
					</div>
					<div>
						<Typography  variant='h4' style={{margin:"20px"}}>
							Connections that last a lifetime
						</Typography>
						<Typography variant="h6">
							your "yeh jawani hai diwani" style moment <br/> is just a recommendation away! 
						</Typography>
					</div>
					<div>
						<Typography  variant='h4' style={{margin:"20px"}}> 
							Find your tribe
						</Typography>
						<Typography variant="h6">
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
