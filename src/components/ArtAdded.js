import {Link} from 'react-router-dom';
import { useParams } from 'react-router'
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card } from 'antd';
import CarouselFront from './Carousel';
import {useState} from 'react';
import '../Profile.css'
import '../Galery.css';
import '../CarousselF.css';


const { Meta } = Card;

function ArtAdded(props) {

//const userId = useParams()
const userId = props.user._id
    
console.log(props.user._id)

const [userArt, setUserArt] = useState (props.art);
    
  const artFiltered = userArt.filter((elem) => {
      return elem.user === userId
  })

   
  if(!artFiltered) {
    return <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    <p>Or maybe you didn't add anything yet.</p>
  </Box>
}

        return (
            <div>
                <div className="seller">
            <CarouselFront />
                 <div className="containerU">     
                {
                   artFiltered.map((elem) => {
                        return (
                                <div className="colX">
                                <Link to={`/auctiondetail/${elem._id}`}>
                                <Card hoverable
                                className='images'
                                style={{ width: 240 }}
                                cover={<img alt="art" src={elem.image} height={200}/>}>
                               <Meta title={elem.title}  />
                               <p>by : {elem.artist}</p>
                                </Card>
                                </Link>
                                </div>
                        )
                    })
                }
    </div>
    </div>
    </div>
        )
    }
    

export default ArtAdded