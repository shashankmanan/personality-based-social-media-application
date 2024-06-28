import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'

export default function Recents() {
  const [tribe,setTribe] = useState('none')
  useEffect(() => {
    setTribe(localStorage.getItem('tribe'))
    
  })
  return (
    <div>
      {
        tribe === "none" ?<Typography variant="h3" component="h2">
            Take the test to meet new people
      </Typography> : <Typography variant="h3" component="h2">
        No new messages...
      </Typography> 
      }
    </div>
  )
}
