import React from 'react'
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Edit } from '@material-ui/icons'; 
import Data from './productListAPI';
import axios from 'axios'; 
import useStyles from './ProductStyle';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container style={{width:"80vw",margin:"15px"}}>
        <Grid container style={{display:"flex",justifyContent:"flex-end",padding:"10px"}}>
        <Link to="/add-new-Product">  <button className={classes.addNewBtn}>Add New Product</button></Link>
        </Grid>
        <Grid container style={{padding:"10px 15px 10px 15px", marginTop:"15px",background:"white",background:"green",color:"white"}}>
          <Grid item xs={2}><b>ID</b></Grid>
          <Grid item xs={2}><b>Name</b></Grid>
          <Grid item xs={2}><b>Quantity</b></Grid>
          <Grid item xs={2}><b>Unit Price</b></Grid>
          <Grid item xs={2}><b>Edit</b></Grid>
          <Grid item xs={2}><b>Delete</b></Grid>
        </Grid>
        {/* http://127.0.0.1:8000/api/products */}
<Grid container style={{background:"white"}}>
       {
         Data.map((val)=>{
           return(
            <Grid container style={{ padding:"8px",borderBottom:"solid #CBCBCB 1px",display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Grid item xs={2}>{val.Id})</Grid>
            <Grid item xs={2}><b>{val.Name}</b></Grid>
            <Grid item xs={2}>{val.Quantity}</Grid>
            <Grid item xs={2}>{val.Unit_Price}</Grid>
            <Grid item xs={2}><Link to="/edit-product"><Edit style={{color:"white", cursor:"pointer", background:"green", width:"35px", height:"35px", padding:"4px", borderRadius:"20px",          boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"}}/></Link> </Grid>
            <Grid item xs={2}><Delete style={{color:"white", cursor:"pointer", background:"#5E4FBF", width:"35px", height:"35px", padding:"4px", borderRadius:"20px",boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"}}/></Grid>
          </Grid>
           )
         })
       }
      
       </Grid>
      </Grid>
    </div>
  )
}
export default ProductList;
