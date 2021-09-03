import React from 'react'
import useStyles from './OrderStyle'
import { Grid } from '@material-ui/core';
const OrderView = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <div style={{background:"green",padding:"10px",color:"white"}}><h2>Order View</h2></div>
        <h4>Order Info</h4>
        <Grid container className={classes.headerManue}>
            <Grid item xs={1}><b>Order ID</b></Grid>
            <Grid item xs={2}><b>User Name</b></Grid>
            <Grid item xs={2}><b>Phone Number</b></Grid>
            <Grid item xs={1}><b>City</b></Grid>
            <Grid item xs={3}><b>Shipping Address</b></Grid>
            <Grid item xs={1}><b>Order Price</b></Grid>
            <Grid item xs={2}><b>Order Placed</b></Grid>
        </Grid>
        <Grid container className={classes.messege}>
            <Grid item xs={1}>01</Grid>
            <Grid item xs={2}>Hamza Faham</Grid>
            <Grid item xs={2}>031875454899</Grid>
            <Grid item xs={1}>Lahore</Grid>
            <Grid item xs={3}>house number 101/4, Lahore Cantt</Grid>
            <Grid item xs={1}>20,000</Grid>
            <Grid item xs={2}>27 july 2021</Grid>
        </Grid>





        <h4>Order Products</h4>
        <Grid container className={classes.headerManue}>
            <Grid item xs={1}><b>Product ID</b></Grid>
            <Grid item xs={3}><b>Product  Name</b></Grid>
            <Grid item xs={2}><b>Product Quantity</b></Grid>
            <Grid item xs={2}><b>Unite Price</b></Grid>
            <Grid item xs={2}><b>Net Totle</b></Grid>
        </Grid>
        <Grid container className={classes.messege}>
            <Grid item xs={1}>01</Grid>
            <Grid item xs={3}>HP Printers 503/A kanoon</Grid>
            <Grid item xs={2}>O3</Grid>
            <Grid item xs={2}>90,000</Grid>
            <Grid item xs={2}>180,000t</Grid>
        </Grid>
        <Grid container className={classes.messege}>
            <Grid item xs={1}>01</Grid>
            <Grid item xs={3}>HP Printers 503/A kanoon</Grid>
            <Grid item xs={2}>O3</Grid>
            <Grid item xs={2}>90,000</Grid>
            <Grid item xs={2}>180,000t</Grid>
        </Grid>
        <Grid container className={classes.messege}>
            <Grid item xs={1}>01</Grid>
            <Grid item xs={3}>HP Printers 503/A kanoon</Grid>
            <Grid item xs={2}>O3</Grid>
            <Grid item xs={2}>90,000</Grid>
            <Grid item xs={2}>180,000t</Grid>
        </Grid>
        <Grid container className={classes.messege}>
            <Grid item xs={1}>01</Grid>
            <Grid item xs={3}>HP Printers 503/A kanoon</Grid>
            <Grid item xs={2}>O3</Grid>
            <Grid item xs={2}>90,000</Grid>
            <Grid item xs={2}>180,000t</Grid>
        </Grid>
        
        </div>
    )
}
export default OrderView;