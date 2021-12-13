import {useState, useEffect} from 'react';
import {useParams, Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../config';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card, Image, Space, Statistic } from 'antd';
import '../ArtDetail.css'
import BidDrawer from './BidDrawer';


const { Meta } = Card;


function ArtDetail(props) {
  const [openT, setOpenT] = useState([]);
    const {artId} = useParams()
    const [artDetail, setArtDetail] = useState(null)
    useEffect(() => {
        const getData = async () => {
           let response = await axios.get(`${API_URL}/auctiondetail/${artId}`)
           setArtDetail(response.data)
        }
        getData()
    }, [])
        if(!artDetail) {
            return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        }

        

        const { Countdown } = Statistic;
    const deadline = Date.parse(artDetail.createdAt)  + 1000 * 60 * 60 * 24 *  artDetail.days + 1000 * 30; 
     //console.log(Date.now())
    //console.log(deadline)


  
    function onFinish() {
      //console.log('finished!');
      setOpenT(false);
      
    }
       
    




    return (
        <div >
            <h2>Piece detail:</h2>
            <div className="detail">
            <Space direction="vertical">        
    <Card
    hoverable
    style={{ width: 240 }}
      width={200}
    cover={<Image
      width={240}
      src={artDetail.image}
    />}  
  >
    <Meta title={artDetail.title}  />
    <br/>
    <p>by : {artDetail.artist}</p>
    <p>Year: {artDetail.year}</p>
    <p>Starting bid: €{artDetail.price}</p>
  </Card>
  <br/>
  
    <div className="offerButton">
    <Countdown title="Auction expires" value={deadline} onFinish={onFinish} /> 
  {  
openT ? (
<BidDrawer />
) : (null)
}
</div>
    </Space>
    </div>
        </div>
    )
}
export default ArtDetail