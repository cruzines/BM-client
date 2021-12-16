import React, {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Team.css'
import { Link } from "react-router-dom";
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

function Team() {
    return (

        <div class='ourface'>
          <div>
        <p class= 'presentation'>
        <h1 class="title"> Meet the team behind this app </h1>
        <h2>This app is the third and final project of the <br /> Ironhack's web development bootcamp.  </h2>
        </p>
        </div>
        <div className="ironhackers">
        <div>
        <Card className="ironhacker" sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        height="360"
        image="../ines.jpg"
        alt="Inês"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Inês Cruz
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Likes dogs. 
        </Typography>
      </CardContent>
      <CardActions class='link'>
     
        <a href="https://www.linkedin.com/in/ines-nobre-cruz/"> 
          <img src={linkedin} alt="linkedin" width='50' />
          </ a > 
          <a href="https://github.com/cruzines"> 
          <img src={github} alt="github" width='50' />
          </ a > 
      
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className="ironhacker" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="360"
        image="../Ricardo.jpg"        
        alt="Ricardo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ricardo Nunes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Likes dogs. 
        </Typography>
      </CardContent>
      <CardActions class='link'>
      <a href="https://www.linkedin.com/in/ricardo-n-nunes/"> 
          <img src={linkedin} alt="linkedin" width='50' />
          </ a > 
          <a href="https://github.com/RicardoNetaNunes"> 
          <img src={github} alt="github" width='50' />
          </ a > 
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className="ironhacker" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="360"
        image="../pearl.jpg"
        alt="Maria"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Maria Farran Colell 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Likes people who like dogs! 
        </Typography>
      </CardContent>
      <CardActions class='link'>
      <a href="https://www.linkedin.com/in/mariafarrancolell/"> 
          <img src={linkedin} alt="linkedin" width='50' />
          </ a > 
          <a href="https://github.com/mafacoll"> 
          <img src={github} alt="github" width='50' />
          </ a > 
      
      </CardActions>
    </Card>
    </div>
    </div>
        </div>
    )
}


export default Team
