import {Button} from  'react-bootstrap'

function AddArt(props){
	
	const {btnSubmit} = props
	return (
		<form onSubmit={btnSubmit}>
			<input  name="artist"  type="text"  placeholder="Author"/>
			<input  name="title"  type="text"  placeholder="Title of artwork"/>
            <input  name="year"  type="text"  placeholder="Dated"/>
            <input  name="image"  type="text"  placeholder="Not real"/>
            <input  name="price"  type="text"  placeholder="Price wanted"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default AddArt