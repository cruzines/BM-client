import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { Card, Image } from 'antd';
import CarouselFront from './Carousel';
import '../Galery.css'
import '../CarousselF.css';

const { Meta } = Card;


function ClosedAuctions() {

    const [photos, setPhotos] = useState([])

    useEffect(() => {

        const getData = async () => {
           let response  = await axios.get('https://picsum.photos/v2/list?page=2&limit=35')
           setPhotos(response.data)
       }
    
       getData()
    
    }, [])



    if(!photos.length) {
        return  <Spin size="large" />
      
    }


    return (
        <div>

           <CarouselFront />
<br/>
<h1>Sold Out</h1>
           <h1>The most wanted amateur collection of our days 2020/2021</h1>
             <div className="containerX">     
            {
                photos.map((elem) => {
                    return (
                            <div className="colX">
                    
                            <Card
                              hoverable
                              className='images'
                              style={{ width: 240 }}
                              width={200}
                              cover={<Image
                              width={240}
                              height={140}
                              src={elem.download_url}
                             />}  
                             > 
                           <Meta title={elem.artist} />
                           <p>Sold </p>
                            </Card>
                            </div>
                    )
                })
            }
</div>
 

        </div>
    )
}

export default ClosedAuctions
