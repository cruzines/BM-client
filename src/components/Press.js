import React, {useState,useEffect} from 'react'
import '../Press.css'
import LottieControl from './LottieControl'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function Press() {

    const [someJson, setJson] = useState(null)
    useEffect(() =>{
        const getData = async () =>{
            let res = await axios.get('https://assets3.lottiefiles.com/packages/lf20_rqxo1mki.json')
            setJson(res.data)
        }
        getData()
    }, [])

    return (
        <div>
            <h1 class= 'lettering'>PRESS</h1>
            <h2 class= 'lettering'>Bid Masters' international communications network is composed of very experienced press offices in more than 25 countries. They routinely  update the most important newspapers and media outlets of each country regarding future auctions. For more information we have the following social media presence: </h2>
            <p class= 'links'><a href="https://www.instagram.com/europe_treasures/">Instagram</a>|<a href="https://www.facebook.com/Bardia.Painting/">Facebook</a>|<a href="https://twitter.com/archaeologyart">Twitter</a>|<a href="https://www.youtube.com/c/BaumgartnerRestoration">Youtube</a>|<a href="https://www.pinterest.com/bcr8tive/art-paintings/">Pinterest</a></p>
            <h2 class= 'lettering'> If you want to contact with us: <br/></h2>


            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            <h2 class= 'lettering'> Albert  Martin: Vice President | Senior Press Officer, North America   - albertmartin@bidmasters.com<br/></h2>
            <h2 class= 'lettering'> Ava  Müller: Senior Vice President | Chief Communications Officer, Europe - avamuller@bidmasters.com<br/></h2>



            <div className="errorSize">
        <h1 style={{ color: '#04435D', textAlign: 'center', marginBottom: -62}}> </h1>
        <LottieControl animation={someJson} width={300} height={300} />
            
        </div>



        </div>
    )
}

export default Press
