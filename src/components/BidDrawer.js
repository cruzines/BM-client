import React, { useState } from 'react';
import { Drawer, Button, Select, InputNumber } from 'antd';


function BidDrawer() {
    const [visible, setVisible] = useState(false);
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
        
  <div className="bid">
  <br/>
  <InputNumber  addonAfter={selectAfter} defaultValue={0} />
  <Button type="primary" block>
      Submit
    </Button>
    </div>
        </Drawer>
      </>
    );
}

export default BidDrawer
