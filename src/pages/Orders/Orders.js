import React from 'react'
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import Data from './OrdersApi';
import useStyle from './OrderStyle'
const Orders = () => {
                const classes = useStyle();
    return (
        <div className={classes.root}>
            <nav style={{background:"green",color:"white",padding:"10px"}}>
            <h1>Orders</h1>
            </nav>
            <Grid container className={classes.headerManue}>
                <Grid item xs={1}><b>ID</b></Grid>
                <Grid item xs={2}><b><b>Customer Name</b></b></Grid>
                <Grid item xs={2}><b>Product</b></Grid>
                <Grid item xs={2}><b>Quantity</b></Grid>
                <Grid item xs={2}><b>Price</b></Grid>
                <Grid item xs={1}><b>Delete</b></Grid> 
                <Grid item xs={1}><b>View</b></Grid>
                </Grid>
            <Grid container style={{padding:"0 10px 0 10px",background:"white",}}>
                {
                    Data.map((val)=>{
                        return(
                            <Grid container style={{borderBottom:"solid #CBCBCB 1px", padding:"10px 10px 0 10px",display:"flex",flexDirection:"row",alignItems:"center",}}>
                <Grid item xs={1}>{val.id}</Grid>
                <Grid item xs={2}><b>{val.customerName}</b></Grid>
                <Grid item xs={2}>{val.product}</Grid>
                <Grid item xs={2}>{val.productQuantity}</Grid>
                <Grid item xs={2}>{val.totlePrice}</Grid>
                <Grid item xs={1}><DeleteIcon  className={classes.blueIcon}/></Grid> 
                <Grid item xs={1}><Link to="/order-view"><VisibilityIcon className={classes.greenIcon}/></Link></Grid>
                </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}
export default Orders;
