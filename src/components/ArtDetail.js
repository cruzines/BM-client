import {useState, useEffect} from 'react';
import {useParams, Link, Navigate} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import axios from 'axios';
import {API_URL} from '../config';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
            <img src={artDetail.image} alt="art"/>
            <h4>Title: {artDetail.title}</h4>
            <h4>Artist name: {artDetail.artist}</h4>
            <h4>Year: {artDetail.year}</h4>
            <h4>Price: {artDetail.price}</h4>

        </div>
    )
}

export default ArtDetail
