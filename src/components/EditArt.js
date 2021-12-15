
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
import {useParams, Link} from 'react-router-dom'
import {API_URL} from '../config'
import '../App.css'




function EditArt(props) {
    const artId = useParams()
    console.log(artId)
    const { btnEditSubmit } = props;
    //console.log(props.user);
    const [editArt, setEditArt] = useState(null)

    useEffect(() => {
        const getData = async () => {
      
           let response = await axios.get(`${API_URL}/user/added/edit/${artId}`, {withCredentials: true})
           setEditArt(response.data)
        }
        getData()
    }, [])

    if(!editArt) {
        return <p>Not there yet</p>
    }
    
//console.log(editArt)

    return (
        <div>
          <div className="extDiv">
		<form onSubmit={(event) => {btnEditSubmit (event, editArt._id)} }>
		
<br/>
			<div class="textFields">
      <TextField
        helperText={editArt.title}
        id="demo-helper-text-misaligned"
		name="artist"
		type="text"
        label="Author"
		fullWidth
      />
</div>
<div class="textFields">
<TextField
        helperText="Please enter the title of the piece"
        id="demo-helper-text-misaligned"
		name="title"
		type="text"
        label="Title"
		fullWidth
      />
</div>
<div class="textFields">
<TextField
        helperText="Please enter the year of piece"
        id="demo-helper-text-misaligned"
		name="year"
		type="text"
        label="Year"
		fullWidth
      />
   </div>
<div class="textFields" >
<TextField
        helperText="Enter the base value"
        id="demo-helper-text-misaligned"
		type="text"
		name="price"
        label="Value"
		fullWidth
      />
</div>
<div class="textFields">
<TextField
        helperText="Please enter the days you want it in auction"
        id="demo-helper-text-misaligned"
		name="days"
		type="text"
        label="Days"
		fullWidth
      />
</div>
<div >
	  <DropzoneAreaBase 
	  class="imageBox"
  acceptedFiles={['image/*']}
  dropzoneText={"Photo here"}
  
  name="myImage"
  type="file"
  accept="image/png, image/jpg" 
  //onChange={(files) => console.log('Files:', files)}
  onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
  fullWidth
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


</div> 
        </div>
    )
}

export default EditArt
