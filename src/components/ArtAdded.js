import {Link} from 'react-router-dom';
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
    
    


    const [userArt, setUserArt] = useState(null)

    useEffect(() => {
        const getData = async () => { 
            console.log(props.user._id)
            let user = props.user._id
           let response = await axios.get(`${API_URL}/user/added/${user}`, {withCredentials: true})
           setUserArt(response.data)
        }
        getData()
    }, [])
 
     
    if(!userArt) {
            return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            <p>Or maybe you didn't add anythin yet.</p>
          </Box>
        }
    

console.log(userArt)


        return (
            <div>
            <CarouselFront />
                 <div className="containerU">     
                {
                    userArt.map((elem) => {
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
        )
    }
    

export default ArtAdded
