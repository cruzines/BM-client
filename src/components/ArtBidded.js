import { Link } from "react-router-dom";
import * as React from "react";
import { Card, Image } from "antd";
import CarouselFront from "./Carousel";
import { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { API_URL } from "../config";
import axios from "axios";
import "../Profile.css";
import "../Galery.css";
import "../CarousselF.css";

const { Meta } = Card;
function ArtBidded(props) {
  const [bids, setBids] = useState([]);
  const [artBid, setArtBid] = useState(props.art);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/bids`);
      setBids(response.data);
    };
    getData();
  }, []);

  if (!bids.length || !artBid.length) {
    return <p>Fetching bids.</p>;
  }

  let artIds = [];
  for (let i = 0; i < artBid.length; i++) {
    let art = [];
    for (let j = 0; j < bids.length; j++) {
      if (artBid[i]._id === bids[j].artId) {
        art.push(bids[j]);
      }
    }
    console.log(art);
    artIds.push(art);
  }
  //  console.log("this is the artIds", artIds)
  let highestBids = [];
  for (let i = 0; i < artIds.length; i++) {
    let highestBid = 0;
    let bidObj = {};
    for (let j = 0; j < artIds[i].length; j++) {
      if (artIds[i][j].bid > highestBid) {
        highestBid = artIds[i][j].bid;
        bidObj = artIds[i][j];
      }
    }
    highestBids.push(bidObj);
  }
  console.log(highestBids);
  let hasUserWon = [];
  for (let i = 0; i < highestBids.length; i++) {
    if (highestBids[i].user === props.user._id) {
      hasUserWon.push(highestBids[i]);
    }
  }
  if (!hasUserWon.length) {
    return <p>No winning bid </p>;
  }
  console.log(hasUserWon);
  //let artist = artBid.filter(e => e._id == hasUserWon[0].artId)[0]
  // console.log(hasUserWon[0].artId)
  let artist = [];
  for (let i = 0; i < artBid.length; i++) {
    const deadline =
      Date.parse(artBid[i].createdAt) +
      1000 * 60 * 60 * 24 * artBid[i].days +
      1000 * 30;
    for (let j = 0; j < hasUserWon.length; j++)
      if (artBid[i]._id === hasUserWon[j].artId && Date.now() >= deadline) {
        artist.push(artBid[i]);
      }
  }
  console.log(artBid);
  console.log(artist);
  let showWinningBid = false;
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  var date = new Date(artist.createdAt);
  if (date.addDays(artist.days) < new Date(hasUserWon[0].createdAt)) {
    showWinningBid = true;
  }
  return (
    <div>
      <div className="seller">
        <CarouselFront />
        {artist.map((u, index) => {
          return (
            <div className="containerU">
              <div className="colX">
                
                  <Card
                    hoverable
                    className="images"
                    style={{ width: 240 }}
                    cover={<Image alt="art" src={u.image} height={200} />}
                  >
                    <Meta title={u.title} />
                    <p>by : {u.artist}</p>
                    <p>SOLD FOR : € {hasUserWon[index].bid}</p>
                    <Link to="/payment"><BsCart4/></Link>
                  </Card>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ArtBidded;
