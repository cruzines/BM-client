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

/* const userId = props.user._id */

//console.log(props.user._id)

const [artBid, setArtBid] = useState([])

useEffect(() => {
    const getData = async () => {
       let response = await axios.get(`${API_URL}/bids`)
       setArtBid(response.data)
    }
    getData()
}, [])

console.log(artBid)
//MAP OVER ALL THE BIDS AND GIVE THE ARTID
const bidArtIds = artBid.map ((elem) => {
    return (elem.artId)
})
console.log(bidArtIds)
//MAP OVER ALL THE BIDS AND GIVE THE BID
const bids = artBid.map((elem) => {
return(elem.bid)
});
console.log(bids)

//MAX BEED FOR EACH ART
//I GIVE UP

//SEE WICH BID IS THE HIGHEST
const maxBid = Math.max(...bids)
console.log(maxBid)

let winner = ''
for (let i=0; i<artBid.length; i++) {
    if (artBid[i].bid == maxBid) {
         winner=artBid[i].artId
    }
}
//console.log(winner)

let winArt = ''
let arts = props.art
for (let i = 0; i < arts.length; i ++) {
    if (arts[i]._id === winner) {
        winArt = arts[i]
    }
}
console.log (winArt)
   
  if(!winArt) {
    return <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    <p>Loading... Be patient</p>
  </Box> }


        return (
            <div>
                <div className="seller">
            <CarouselFront />
                 <div className="containerU">     
                                <div className="colX">
                                <Link to={`/auctiondetail/${winArt._id}`}>
                                <Card hoverable
                                className='images'
                                style={{ width: 240 }}
                                cover={<img alt="art" src={winArt.image} height={200}/>}>
                               <Meta title={winArt.title}  />
                               <p>by : {winArt.artist}</p>
                               <p>SOLD FOR : {maxBid}</p>
                                </Card>
                                </Link>
                                </div>
    </div>
    </div>
    </div>
        )
    }
    

export default ArtBidded





{/* <BsCart4><Link to='/user/checkout'></Link></BsCart4> */}