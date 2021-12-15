import {Link} from 'react-router-dom';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card } from 'antd';
import CarouselFront from './Carousel';
import {useState, useEffect} from 'react';
import { BsCart4 } from 'react-icons/bs';
import {API_URL} from '../config';
import axios from 'axios';
import '../Profile.css'
import '../Galery.css';
import '../CarousselF.css';


const { Meta } = Card;

function ArtBidded(props) {

const userId = props.user._id

console.log(props.user._id)

const [artBid, setArtBid] = useState([])

useEffect(() => {
    const getData = async () => {
       let response = await axios.get(`${API_URL}/bids`)
       setArtBid(response.data)
    }
    getData()
}, [])

console.log(artBid)
const maxBid = Math.max(...artBid.map(bid => bid.value));

console.log(maxBid)
  const bidFiltered = artBid.filter((elem) => {
      return 'ola'
  })

   
  if(!bidFiltered) {
    return <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    <p>Or maybe you didn't bid anything yet.</p>
  </Box> }


        return (
            <div>
                <div className="seller">
            <CarouselFront />
                 <div className="containerU">     
                {
                   bidFiltered.map((elem) => {
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
    

export default ArtBidded





{/* <BsCart4><Link to='/user/checkout'></Link></BsCart4> */}