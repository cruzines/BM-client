import React from 'react';
/* import Stripe from './Stripe'; */
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function Profile() {
    return (
        <div>
<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}/>

       TESTE
           {/*  <Stripe /> */}
        </div>
    )
}

export default Profile
