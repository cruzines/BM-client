import "../AddArt.css";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import imageDowload from "../images/customized-upload-icon.png";
import CarouselFront from "./Carousel";
import "../CarousselF.css";

function AddArt(props) {
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
                  <button class="btn">
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
        
          {/* LOTTIEEEEEEEEE <iframe src="https://embed.lottiefiles.com/animation/24950"></iframe>  */}

          <p> Botar lottie here </p>
        </>
      )}
    </div>
  );
}

{
  /*  
<Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
		<form onSubmit={btnSubmit}>
		<div >
	  <DropzoneAreaBase 
	  class="imageBox"
  acceptedFiles={['image/*']}
  dropzoneText={"Photo here"}
  
  name="myImage"
  type="file"
  accept="image/png, image/jpg" 
  onChange={(files) => console.log('Files:', files)}
  onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
  fullWidth
/>
</div> 
<br/>
			<div class="textFields">
      <TextField
        helperText="Please enter the author"
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
   
<br/>
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
<div>
<Button class="button" type="submit"  variant="outlined" size="large">
          Submit
        </Button>
		</div>
</form>


    </Box>


    */
}

export default AddArt;
