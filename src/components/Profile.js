import React from "react";
/* import Stripe from './Stripe'; */
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Profile.css";
import { Link } from "react-router-dom";

function Profile(props) {
  console.log(props.user._id);
  return (
    <div>
      <div className="center">
        <div class="container mt-5 d-flex justify-content-center ">
          <div class="maincard p-3">
            <div class="thecard">
              <div class="thefront text-center py-4">
                <Avatar
                  className="center"
                  style={{ backgroundColor: "#04435d" }}
                  icon={<UserOutlined />}
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                />
                <br />
                <h3 class="mt-2 mb-0">
                  Name: {props.user.firstName} {props.user.lastName}
                </h3>
                <h3 class="mt-2 mb-0">Email: {props.user.email}</h3>
                <div class="stats d-flex justify-content-between px-3 mt-3"></div>
              </div>
              <div class="theback text-center py-3 px-3">
                <br />
                <h4 class="about text-justify">
                  Follow the link and see the art works that you added or
                  bougth.
                </h4>

                <Link to={`/user/added/${props.user}`}>
                  <h1>Added</h1>{" "}
                </Link>
                <button class="btn follow-button btn-block">Bought</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <Stripe /> */}
    </div>
  );
}

export default Profile;
