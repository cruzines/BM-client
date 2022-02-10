import React, { useState } from 'react';
import { Drawer, Button, Select, Input } from 'antd';
import '../ArtDetail.css'
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

    return (
      <>
      {
        props.user ? (
          <>
          <Button className="bidbutton" type="primary" onClick={showDrawer}>Make an offer</Button>
          </>
        ) : ( null )
      }
        <Drawer title="Make your offer" placement="bottom" onClose={onClose} visible={visible}>
  <div className="bids">
  <br/>
  <form onSubmit={btnSubmitG}>
  <Input placeholder="Enter your bid" addonAfter="€"  name="bid"  type="number"/>
  <button className="bidbutton" type="submit"  >Submit</button>
    </form>
    </div>
        </Drawer>
      </>
    );
}
export default BidDrawer
