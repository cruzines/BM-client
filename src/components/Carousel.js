import React from "react";
import "antd/dist/antd.css";
import "../CarousselF.css";
import { Carousel } from "antd";
import img1 from "../images/1.jpg";
import img5 from "../images/5.png";
import img7 from "../images/7.jpg";
import img10 from "../images/404.jpg";

const contentStyle = {
  height: "260px",
  color: " #FFFFFF",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fffff",
};

function CarouselFront() {
  return (
    <div className="carousel">
      <Carousel autoplay>
        <div className="imageDiv">
          <img className="image" src={img1} style={contentStyle} alt="art" />
          <div className="text">
            <h1> </h1>
          </div>
        </div>
        <div className="imageDiv">
          <img className="image" src={img5} style={contentStyle} alt="art" />
          <div className="text">
            <h1></h1>
          </div>
        </div>
        <div className="imageDiv">
          <img className="image" src={img10} style={contentStyle} alt="art" />
          <div className="text">
            <h1></h1>
          </div>
        </div>
        <div className="imageDiv">
          <img className="image" src={img7} style={contentStyle} alt="art" />
          <div className="text">
            <h1></h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselFront;
