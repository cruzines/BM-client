import {useState, useEffect} from 'react';
import {useParams, Link, Navigate} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import axios from 'axios';
import {API_URL} from '../config';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card } from 'antd';

const { Meta } = Card;

function ArtDetail(props) {

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

    return (
        <div>
            <h2>Piece detail:</h2>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="art" src={artDetail.image} />}
  >
    <Meta title={artDetail.title}  />
    <br/>
    <p>Artist name: {artDetail.artist}</p>
    <p>Year: {artDetail.year}</p>
    <p>Price: {artDetail.price}</p>

  </Card>,

        </div>
    )
}

export default ArtDetail
