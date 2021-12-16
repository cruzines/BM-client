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

//NOT WORKING YET
const { Meta } = Card;

function ArtBidded(props) {

const [bids, setBids] = useState ([]);
const [artBid, setArtBid] = useState(props.art)
//console.log(artBid)

useEffect(() => {
    const getData = async () => {
       let response = await axios.get(`${API_URL}/bids`)
       //console.log(response.data, '22222222222222222222')
       setBids(response.data)

    }
    getData()
}, [])

//console.log(bids)

if (!bids.length || !artBid.length) {
    return <p>Fetching bids.</p>
}



let artIds = []

for (let i = 0; i < artBid.length ; i++) {
    let art = []
    for (let j = 0 ; j < bids.length; j++) {
        if (artBid[i]._id == bids[j].artId) {
            art.push(artBid[i])
        }
    }
    //console.log(art)
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

console.log(highestBids)
// let winners = []
// for (let i = 0; i < highestBids.length; i++) {
//     for (let j = 0; j < artIds[i].length; j++) {
//         console.log('highest bids:', highestBids[i], 'these are takas:', artIds[i][j])
//         if(artIds[i][j].bid == highestBids[i]){
//             winners.push(artIds[i][j])
//         }
//     }
// }  
// console.log(winners)
// let showWin = []
// for (let i = 0; i < winners.length; i++) {
//    //console.log(winners[i])
      
//        if(winners[i].user == props.user._id){
//             showWin.push(winners[i])
//     }
// }
// console.log(showWin)
 
// let showArt = []
// for (let i = 0; i < showWin.length; i++) {
//    //console.log(winners[i])
  
//        if(showWin[i].artId == props.art._id){
//             showArt.push(showWin[i])
            
//     }
// }

    let hasUserWon = [];
    for (let i = 0; i < highestBids.length; i++) {
        if (highestBids[i].user == props.user._id) {
            hasUserWon.push(highestBids[i])
        }
    }

    if (!hasUserWon.length) {
        return <p>No winning bid </p>
    }
    console.log(artBid, hasUserWon)

    let artist = artBid.filter(e => e._id == hasUserWon[0].artId)[0]
    console.log(artist)

        return (
            <div>
                <div className="seller">
            <CarouselFront />
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





{/* <BsCart4><Link to='/user/checkout'></Link></BsCart4> */}