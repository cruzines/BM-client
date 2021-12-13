import React, { useState } from 'react';
import { Drawer, Button, Select, InputNumber, Input } from 'antd';
import axios from 'axios';
import {API_URL} from '../config';
import {Link } from 'react-router-dom'


function BidDrawer(props) {
    const [visible, setVisible] = useState(false);
   console.log()
    const {btnSubmitG} = props

    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };

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
      <>
        <Button type="primary" onClick={showDrawer}>
         Make an offer
        </Button>
        <Drawer title="Make your offer" placement="bottom" onClose={onClose} visible={visible}>
        
  <div className="bids"> 
  <br/>
  <form onSubmit={btnSubmitG}>
  <Input placeholder="Enter your bid" addonAfter={selectAfter}  name="bid"  type="number"/>
  
  <button  type="submit"  >Submit</button>
    </form>
    </div>
        </Drawer>
      </>
    );
}

export default BidDrawer
