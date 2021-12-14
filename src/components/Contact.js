import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../contact.css'
import { Link } from "react-router-dom";


function Contact() {
    return (
        <div class='conactCards'>

<Card sx={{ width: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../currentAuction.jpg"
          alt="Live auctions"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Live Auctions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            See our current sales
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/live" class="btn">Go to</Link>
      </CardActions>
    </Card>

    <Card sx={{ width: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../David.jpg"
          alt="Future Auctions"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Future auctions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check out what's next
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/futureauctions" class="btn">Go to</Link>
      </CardActions>
    </Card>

    <Card sx={{ width: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../team.jpg"
          alt="The team"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Our team
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Meet the team behind Bid Maters
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/theteam" class="btn">Go to</Link>
      </CardActions>
    </Card>

    <p class = 'text'>
    <h2> General Enquiries:</h2>
    enquiries@bidmasters.com
    <h2> Buy Now Enquiries:</h2>
    buy@bidmasters.com <br/>
    <h3> Europe </h3>
    +123 426 789
    <h3> North Amercia </h3>
    +456 111 111 <br/>
    <h2> Bidding Enquiries:</h2>
    bids@bidmasters.com <br/>
    <h3> Europe </h3>
    +123 101 112 <br/>
    +123 134 415 <br/>
    <h3> North Amercia </h3>
    +456 789 101 <br/>
    +456 112 134 <br/>
    </p>
            
        </div>
    )
}

export default Contact
