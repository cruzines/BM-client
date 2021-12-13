import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../CarousselF.css'
import { Carousel } from 'antd';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.jpg'

const contentStyle = {
    height: '260px',
    color: ' #FFFFFF',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fffff',
  };

function CarouselFront() {
    return (
        <div className='carousel'>
            
            <Carousel autoplay>
    <div className='imageDiv'>
        <img className='image' src={img1} style={contentStyle} alt='art'/>
        <div className='text'><h4>Soon available</h4></div>
    </div>
    <div className='imageDiv'>
    <img className='image' src={img2} style={contentStyle} alt='art'/>
    <div className='text'><h4>Soon available</h4></div>
    </div>
    <div className='imageDiv'>
    <img className='image' src={img3} style={contentStyle} alt='art'/>
    <div className='text'><h4>Soon available</h4></div>
    </div>
    <div className='imageDiv'>
    <img className='image' src={img4} style={contentStyle} alt='art'/>
    <div className='text'><h4>Soon available</h4></div>
    </div>
  </Carousel>
        </div>
    )
}

export default CarouselFront
