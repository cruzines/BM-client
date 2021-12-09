
import {Link} from 'react-router-dom';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState } from 'react';


function ArtListing(props) {
//console.log(props)
    const {art} = props
console.log(art)

const [artCopy, setArtCopy] = useState(art)
/*
    if(!art.length) {
        return <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    }
*/
    return (
        <div>
            <p>Art in auction</p>
            {
                artCopy.map((elem) => {
                    return (
                        <div>
                            <img src="elem.image" alt="art"/>
                            <Link to={`/auctiondetail/${elem._id}`}>{elem.title}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default ArtListing