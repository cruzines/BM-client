import {Link} from 'react-router-dom';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card } from 'antd';
import '../Galery.css'
import {Container, Row, Col } from 'react-bootstrap'

const { Meta } = Card;

function ArtListing(props) {
//console.log(props)

    const {art} = props
console.log(art)



    if(!art.length) {
        return <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    }

    return (
       
             <div className="containerX">
                       
            
            {
                art.map((elem) => {
                    return (
                            
                            <Col className="colX">
                            <Link to={`/auctiondetail/${elem._id}`}> 
                            <Card hoverable 
                            className='images'
                            style={{ width: 240 }}
                            cover={<img alt="art" src={elem.image} height={200}/>}>
                           <Meta title={elem.title}  />
                           <p>by : {elem.artist}</p>
                            </Card>,
                            </Link>
                            </Col>
                          
                           


                    )
                })
            }


</div>
        
    )
}

export default ArtListing