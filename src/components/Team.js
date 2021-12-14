import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Team.css'
import { Link } from "react-router-dom";


function Team() {
    return (

        <div class='ourface'>
        <p class= 'presentation'>
        <h1 class="title"> Meet the team behind this app </h1>
        <h2>This app is the third and final project (so sad) of the <br /> Ironhack's web development bootcamp.  </h2>
        </p>

        <Card sx={{ maxWidth: 345 }}>
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
      <a href="https://www.linkedin.com/in/ines-nobre-cruz/">Visit Inês' linkedin<br /></a>
      <a href="https://github.com/cruzines">Visit Inês' github</a>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
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
      <a href="https://www.linkedin.com/in/ricardo-n-nunes/">Visit Ricardo's linkedin<br /></a>
      <a href="https://github.com/RicardoNetaNunes">Visit Ricardo's github</a>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
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
      <a href="https://www.linkedin.com/in/mariafarrancolell/">Visit Maria's linkedin<br /></a>
      <a href="https://github.com/mafacoll">Visit Maria's github</a>
      </CardActions>
    </Card>


        </div>
    )
}


export default Team
