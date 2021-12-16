
import Box from "@mui/material/Box";
import imageDowload from "../images/customized-upload-icon.png";
import CarouselFront from "./Carousel";
import "../CarousselF.css";
import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {API_URL} from '../config'
import "../AddArt.css";
import '../App.css'
import '../EditArt.css'



function EditArt(props) {
    const {artId} = useParams()
    //console.log(artId)
    
    //console.log(props.user);
    const [editArt, setEditArt] = useState(null)

    useEffect(() => {
        const getData = async () => {
      
           let response = await axios.get(`${API_URL}/user/added/${artId}`, {withCredentials: true})
           setEditArt(response.data)
        }
        getData()
    }, [])

    if(!editArt) {
        return <p>Not there yet</p>
    }
    const { btnEdit} = props;
    

    return (
        <div>

           
 <div class="form">
 <h2>If you need to edit your added art fill the form and click the button.</h2>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}>

              <form onSubmit={(event) => {  btnEdit(event, editArt._id)  }} >
                <div>
                    <h3>Artist:</h3>
                  <input
                    id="inputID"
                    class="textFields"
                    name="artist"
                    type="text"
                    placeholder={editArt.artist}
                  />
                </div>
                <div>
                    <h3>Title: </h3>
                  <input
                    id="inputID"
                    class="textFields"
                    name="title"
                    type="text"
                    placeholder={editArt.title}
                  />
                </div>
                <div>
                    <h3>Year:</h3>
                  <input
                    id="inputID"
                    class="textFields"
                    name="year"
                    type="text"
                    placeholder={editArt.year}
                  />
                </div>
                <div>
                    <h3>Minimum bid: </h3>
                  <input
                    id="inputID"
                    class="textFields"
                    name="price"
                    type="text"
                    placeholder={editArt.price}
                  />
                </div>
                <div>
                    <h3>Days of auction:</h3>
                  <input
                    id="inputID"
                    class="textFields"
                    name="days"
                    type="text"
                    placeholder={editArt.days}
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
           

        </div>
    )
}



export default EditArt
