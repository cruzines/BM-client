import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../privateSales.css'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


function PrivateAuction() {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  
    return (
      <div class= 'privateBox'>
        <p>
            <h1> PRIVATE AUCTION:<br /> MANISH PODUVAL</h1>
            <h2> Known for his impossibly long, but extremely philosophical titles, the artist is expected to return from a six month long hiatus in the following weeks. While we want to see what he'll produce next we're excited to present you some of his masterpieces.</h2>
        </p>

        <div class= 'paintings'>
        <Card sx={{ maxWidth: 250 }}>
          <CardHeader
            title="Chill out, relax and have an open mind."
            subheader="July 25, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../manish1.PNG"
            alt="Beach Sunset"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Painting done in procreate on an Ipad. The colors on this piece are spectacular, like is the reflection  of the sun on the calm water. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD

              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="Look deep into nature, and then you will understand everything better."
            subheader="May 29, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../manish2.PNG"
            alt="Beach Sunset"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. The sky is the main focus of the painting, where all the color is and blends multiple tones together.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb."
            subheader="May 16, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../manish3.PNG"
            alt="Mountain Sunrise"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. The details on the mountains are exquisite. We can appreciate the artist's mastery and talent on the gradient of the sunset.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="In a world deluged by irrelevant information, clarity is power."
            subheader="May 22, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../manish4.PNG"
            alt="Ocean Sunset"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. The photorealism of the painting transports us to the middle of the sea. Notable is the depth that the colors used to give to the water.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="Curiosity about life in all of its aspects, I think, is still the secret of great creative people."
            subheader="May 2, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../Manish5.PNG"
            alt="Beach Sunset"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad.  As the artist is often inspired by nature this painting is unique. The warm colors of the sunset delimit the figure of the monument very intensely.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="Sometimes, you just need to change your altitude."
            subheader="April 25, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../Manish6.PNG"
            alt="Beach Sunset"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. The contrast between the cold and warm tones is exquisite. One of the artist's favorites.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="You have power over your mind - not outside events. Realize this, and you will find strength."
            subheader="April 3, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../Manish7.PNG"
            alt="Palm sunset"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. The artist paints one of his usual subjects, the sky and palm trees, but the colors used for this piece make it very unique and refreshing.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="Sunset I."
            subheader="February 20, 2020"
          />
          <CardMedia
            component="img"
            height="194"
            image="../Manish8.PNG"
            alt="Ocean sunrise"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. This is truly a showstopper piece as we can see a lot of detail in both the sky and the sea, two of the artist's favourite subjects.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
          <CardHeader
            title="Sunset II."
            subheader="January 20, 2021"
          />
          <CardMedia
            component="img"
            height="194"
            image="../Manish9.PNG"
            alt="Dreamy Clouds"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Painting done in procreate on an Ipad. The details of the clouds are remarkable, and the brushstrokes are impeccable.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Value:</Typography>
              <Typography paragraph>
              Estimate : 120,000 - 180,000 USD <br />
              STARTING BID: 80,000 USD
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    </div>

      );
    
}

export default PrivateAuction
