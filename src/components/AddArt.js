import "../AddArt.css";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import imageDowload from "../images/customized-upload-icon.png";
import CarouselFront from "./Carousel";
import "../CarousselF.css";
import axios from 'axios'
import React, {useState,useEffect} from 'react'
import LottieControl from './LottieControl'
import '../App.css'

function AddArt(props) {

  //This is for lottie
  const [someJson, setJson] = useState(null)
    useEffect(() =>{
        const getData = async () =>{
          let res = await axios.get('https://assets3.lottiefiles.com/packages/lf20_jjgda9tx.json')
            setJson(res.data)
       }
        getData()
   }, [])

  const { btnSubmit } = props;
  //console.log(props.user);
  return (
    <div>
      
      {props.user ? (
        <>
          <CarouselFront />
          <div class="form">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <form onSubmit={btnSubmit} user={props.user._id}>
                <div>
                  <input
                    id="inputID"
                    class="textFields"
                    name="artist"
                    type="text"
                    placeholder=" Author"
                  />
                </div>
                <div>
                  <input
                    id="inputID"
                    class="textFields"
                    name="title"
                    type="text"
                    placeholder=" Title of artwork"
                  />
                </div>
                <div>
                  <input
                    id="inputID"
                    class="textFields"
                    name="year"
                    type="text"
                    placeholder=" Dated from"
                  />
                </div>
                <div>
                  <input
                    id="inputID"
                    class="textFields"
                    name="price"
                    type="text"
                    placeholder=" Price wanted"
                  />
                </div>
                <div>
                  <input
                    id="inputID"
                    class="textFields"
                    name="days"
                    type="text"
                    placeholder=" How many days of auction"
                  />
                </div>
                <div className="upload-btn-wrapper">
                  <button class="btn1">
                    <img src={imageDowload} alt="upload" /> Upload Photo
                  </button>

                  <input
                    class="btn"
                    name="myImage"
                    type="file"
                    accept="image/png, image/jpg"
                    placeholder="Photo here"
                  />
                </div>

                <div>
                  <button
                    class="button"
                    type="submit"
                    style={{ fontSize: "20px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Box>
          </div>
        </>
      ) : (

        
        
        <>
          <p className="loginLottie">   
        <h1 style={{ color: '#04435D', textAlign: 'center'}}> Please log in to continue</h1>
        <LottieControl animation={someJson} width={500} height={500} />

    )</p>
        </>
      )}
    </div>
  );
}






export default AddArt;