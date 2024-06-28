
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Box } from '@mui/material'

export default function TribesHome() {
    const [tribe,setTribe] = useState("none")
    const [tribeDesc , setTribeDesc] = useState("")
    useEffect(
    () => {
        const val = localStorage.getItem("tribe") 
        console.log(val)
        if(val) {
            setTribe(val)
            switch(val) {
                case "The_Explorer" : 
                    setTribeDesc( " The Explorer is characterized by a high degree of openness to new experiences. These individuals are imaginative, curious, and creative. They thrive on exploring new ideas, concepts, and experiences. The Explorer is often seen as someone who embraces change and innovation, and they are not afraid to venture into the unknown. Their willingness to step out of their comfort zone often leads to exciting and novel experiences, making them the ones who bring fresh perspectives and innovative solutions to the table.")
                    break;
                case "The_Peacemaker" : 
                    setTribeDesc("The Peacemaker is distinguished by a high degree of agreeableness. These individuals are compassionate, cooperative, and tolerant. They are often seen as kind-hearted and trustworthy, always willing to lend a helping hand or offer support to others. The Peacemaker values harmony and strives to create a peaceful and collaborative environment. Their empathetic nature makes them adept at understanding and sympathizing with others' feelings, often making them the go-to person for resolving conflicts and fostering positive relationships.")
                    break;
                case "The_Sentinel" : 
                    setTribeDesc("The Sentinel is characterized by high levels of neuroticism. These individuals tend to be more anxious, self-conscious, and prone to experiencing negative emotions. The sentinel often finds themselves overthinking and worrying about potential problems or challenges. They may be more sensitive to stress and less emotionally resilient in the face of adversity. Despite this, their cautious nature can be beneficial in anticipating and preparing for potential issues. The sentinel's heightened awareness of risks can help them take proactive measures to avoid problems and ensure careful decision-making.")
                    break;
                case "The_Planner" : 
                    setTribeDesc("The Planner is highly conscientious, displaying a strong sense of duty, organization, and goal orientation. These individuals are disciplined and reliable, often known for their meticulous planning and ability to stick to their commitments. The Planner excels in creating detailed plans and executing them with precision. They are often seen as dependable and hardworking, ensuring that tasks are completed efficiently and effectively. Their structured approach to life helps them achieve their goals and maintain a sense of order in both personal and professional realms.")
                    break;
                case "The_Social Butterfly" : 
                    setTribeDesc("The Social Butterfly is marked by a high level of extraversion. These individuals are outgoing, energetic, and assertive. They enjoy being around people and are often the life of the party. The Social Butterfly thrives in social settings, easily forming connections and engaging in conversations. Their enthusiasm and sociability often lead them to have a wide circle of friends and acquaintances. They bring energy and positivity to any gathering, making them natural leaders and connectors within their social networks")
                    break;
                case "NOT_TAKEN" :
                    setTribe("none")
                    break;
            }
        }
    }
  )
  
    return (
    <>
    <Box sx={{ margin: 0, padding: 0 }}>
        { 
            tribe === "none" ? 
            <div>
                <Typography variant="h5" component="h1" >Take the test! find yout tribe!</Typography>
                <Link to="/account/test">
                <Button variant="outlined">Take the test</Button>
                </Link>
            </div> : 
            <>
            <h1>Your Tribe is : {tribe}</h1>
            <h3>{tribeDesc}</h3>
            </>
        }
    </Box>
        
    </>
  )
}
