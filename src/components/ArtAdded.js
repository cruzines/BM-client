import {Link} from 'react-router-dom';
import { useParams } from 'react-router'
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card } from 'antd';
import CarouselFront from './Carousel';
import '../Galery.css';
import '../CarousselF.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../config'
import '../Profile.css'


const { Meta } = Card;

function ArtAdded(props) {

//const userId = useParams()
const userId = props.user._id
    
//console.log(props.art)
console.log(userId)
    
const [userArt, setUserArt] = useState (props.art);
    
  const weWant = userArt.filter((elem, props) => {
      return elem.user === userId
  })



        return (
            <div>
                <div className="seller">
            <CarouselFront />
                 <div className="containerU">     
                {
                   weWant.map((elem) => {
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
