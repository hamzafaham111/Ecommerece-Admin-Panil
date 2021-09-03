import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import PublishIcon from '@material-ui/icons/Publish';
import useStyles from './AddNewProductStyle'
import { Grid } from '@material-ui/core';
const EditNewProduct = () => {
    const classes = useStyles();
 
    const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
  
    return (
        <div  className={classes.root}>
         <form className={classes.form}>
         <h2>New Product</h2>
             <Grid container  spacing="2">
                 <Grid item xs={12}>
                     <input className={classes.input} type="text" placeholder="Title"/>
                 </Grid>
                 <Grid item xs={6}>
                     <select className={classes.input}>
                        <option>Select Catogries</option>
                        <option>HP Printer 305 cannon</option>
                        <option>Select Catogries</option>
                        <option>Select Catogries</option>
                        <option>Select Catogries</option>
                        <option>Select Catogries</option>
                        <option>Select Catogries</option>
                     </select>
                 </Grid>
                 <Grid item xs={6}>
                     <input className={classes.input} type="text" placeholder="Product Price"/>
                 </Grid>

                 <Grid item xs={12}>
                 <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
                 />
                 </Grid>
                 <Grid item xs={12}>
                 <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
                 />
                 </Grid>

                 <Grid item xs={12} >
                   <div style={{border:"solid 1px",padding:"10px"}}>
                   <div>
                   <label for="productImage"><PublishIcon style={{width:"40px",height:"40px", width:"100%"}}/>
                   <div>
                       <h3 style={{textAlign:"center"}}>Select Product Image</h3>
                   </div>
                    </label>
                     <input className={classes.input}  id="productImage" style={{display:"none",visibility:"none"}} type="file" placeholder="Product Price"/>
                   </div>
                   </div>
                 </Grid>
                 <Grid item xs={12}>
                     <input className={classes.addNewProductFormBtn}  type="submit" value="Add New Product" placeholder="Enter YOur Full Name"/>
                 </Grid>
             </Grid>
         </form>
        </div>
    )
}
export default EditNewProduct;