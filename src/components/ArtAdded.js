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
const {btnDelete} = props
const [userArt, setUserArt] = useState (props.art);


   console.log([userId], userArt)
  const artFiltered = userArt.filter((elem) => {
      let userNumbers = elem.user.toString()
    return userNumbers === userId 
  })
console.log(artFiltered)
   
  if(!artFiltered.length) {
    return <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    <p>Or maybe you didn't add anything yet.</p>
  </Box>
}
//console.log(artFiltered , props.art)


        return (
            <div>
                <div className="seller">
            <CarouselFront />
            <div className='sellerArt'>
            <div>
                <h2> Here you can see all the art that you put to sell, edit the information, and even remove it from auction.  </h2>
                </div> 
                 <div className="containerX">  
                 
                {
                   artFiltered.map((elem) => {
                        return (
                                <div className="colX">
                                <Link to={`/user/added/edit/${elem._id}`}>
                                <Card hoverable
                                className='images'
                                style={{ width: 240 }}
                                cover={<img alt="art" src={elem.image} height={200}/>}>
                               <Meta title={elem.title}  />
                               <p>by : {elem.artist}</p>
                                </Card>
                                </Link>
                                <button  class="button" type="submit" style={{ fontSize: "20px" }} onClick={() => { btnDelete(elem._id)  }  } >Remove</button>
                                </div>
                        )
                    })
                }
    </div>
    </div>
    </div>
    </div>
        )
    }
    

export default ArtAdded
