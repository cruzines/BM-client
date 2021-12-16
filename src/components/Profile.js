import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Profile.css";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <div>
      <div className="center">
        <div class="container mt-5 d-flex justify-content-center ">
          <div class="maincard p-3">
            <div class="thecard">
              <div class="thefront text-center py-4">
                <Avatar
                  className="center"
                  style={{ backgroundColor: "#04435D" }}
                  icon={<UserOutlined />}
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                />
                <br />
                <h3 class="mt-2 mb-0">
                  Name: {props.user.firstName} {props.user.lastName}
                </h3>
                <h3 class="mt-2 mb-0">Email: {props.user.email}</h3>
                <br/>
                <div class="stats d-flex justify-content-between px-3 mt-3"></div>
              </div>
              <div class="theback text-center py-3 px-3">
                <br />
                <h1>My Art Wallet</h1>
                <img src='/money.png' alt='money' className="centerP" />
                <Link to={`/user/added/${props.user._id}`}>
                  <h2 className='myLink'>My Added Auctions</h2>{" "}
                </Link>
                <Link to={`/user/bid`}>
                  <h2 className='myLink'>My Winning Bids</h2>{" "}
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Profile;