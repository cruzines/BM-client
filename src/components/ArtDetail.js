import {useState, useEffect} from 'react';
import {useParams, Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../config';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Card, Image,  } from 'antd';
import { Button } from 'antd';
import { InputNumber, Select, Space } from 'antd';
import '../ArtDetail.css'
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
        const { Option } = Select;
        const selectAfter = (
          <Select defaultValue="USD" style={{ width: 60 }}>
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
          </Select>
        );
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
  <h4>Make your offer:</h4>
  <div className="bid">
  <br/>
  <InputNumber  addonAfter={selectAfter} defaultValue={50} />
  <Button type="primary" block>
      Submit
    </Button>
    </div>
    <br />
    </Space>
    </div>
        </div>
    )
}
export default ArtDetail
