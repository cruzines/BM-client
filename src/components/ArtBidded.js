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
/* import StripeApp from './StripeApp' */
import '../Profile.css'
import '../Galery.css';
import '../CarousselF.css';

//NOT WORKING YET
const { Meta } = Card;

function ArtBidded(props) {

const [bids, setBids] = useState ([]);
const [artBid, setArtBid] = useState(props.art)


useEffect(() => {
    const getData = async () => {
       let response = await axios.get(`${API_URL}/bids`)
       setBids(response.data)
    }
    getData()
}, [])

//console.log(bids)

if (!bids.length || !artBid.length) {
    return <p>Fetching bids.</p>
}


//console.log(bidArtIds())

let artIds = []

for (let i = 0; i < artBid.length ; i++) {
    let art = []
    for (let j = 0 ; j < bids.length; j++) {
        if (artBid[i]._id == bids[j].artId) {
            art.push(bids[j])
        }
    }
    console.log(art)
    artIds.push(art)
}

//  console.log("this is the artIds", artIds)

let highestBids = []
for (let i = 0; i < artIds.length; i++) {
    let highestBid = 0; let bidObj = {}
    for (let j = 0; j < artIds[i].length; j++) {
      
        if (artIds[i][j].bid > highestBid) {
            highestBid = artIds[i][j].bid
            bidObj = artIds[i][j]
        }
        
    }
    highestBids.push(bidObj)
} 

console.log(highestBids)

    let hasUserWon = [];
    for (let i = 0; i < highestBids.length; i++) {
        if (highestBids[i].user == props.user._id) {
            hasUserWon.push(highestBids[i])
        }
    }

    if (!hasUserWon.length) {
        return <p>No winning bid </p>
    }
    console.log( hasUserWon)

    let artist = artBid.filter(e => e._id == hasUserWon[0].artId)[0]
    console.log(artist)

    let showWinningBid = false

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    
    var date = new Date(artist.createdAt);
    
    if( date.addDays(artist.days) < new Date(hasUserWon[0].createdAt)) {
        showWinningBid = true
    }



        return (     
            
            <div>
                <div className="seller">
            <CarouselFront />
           {/*  <StripeApp /> */}
           {/* <a to='https://buy.stripe.com/test_7sI8zYdpg7rK74I9AA'><BsCart4/></a> */}



              {
                  hasUserWon.map((u) => {
                      return (
                        <div className="containerU">     
                                <div className="colX">
                                <Link to={`/auctiondetail/${artist._id}`}>
                                <Card hoverable
                                className='images'
                                style={{ width: 240 }}
                                cover={<img alt="art" src={artist.image} height={200}/>}>
                               <Meta title={artist.title}  />
                               <p>by : {artist.artist}</p>
                               <p>SOLD FOR : {u.bid}</p>
                                </Card>
                                </Link>
                                </div>
    </div>
                      )
                  })
              }
             
    </div>
    </div>
  

        )
    }
    

export default ArtBidded





