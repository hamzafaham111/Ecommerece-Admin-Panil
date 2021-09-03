import React from 'react'
import Data from './CustomerApi';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './CustomerStyle';

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core'
const Custimer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <nav className={classes.header}><h1>Customers</h1></nav>
          <Grid container className={classes.headerManue}>
                    <Grid item  xs={1}><b>ID</b></Grid>
                    <Grid item xs={3}><b>Name</b></Grid>
                    <Grid item xs={3}><b>Email</b></Grid>
                    <Grid item xs={3}><b>City</b></Grid>
                    <Grid item xs={1}><b>View</b></Grid>
                    <Grid item xs={1}><b>Delete</b></Grid>
                </Grid>
           <Grid container >
               {
               Data.map((val)=>{
                   return(
                <Grid container className={classes.customer}>
                    <Grid item  xs={1}>{val.ID})</Grid>
                    <Grid item xs={3}><b>{val.name}</b></Grid>
                    <Grid item xs={3}>{val.email}</Grid>
                    <Grid item xs={3}>{val.city}</Grid>
                    <Grid item xs={1}><Link to="/CustomerView"><VisibilityIcon className={classes.greenIcon}/></Link></Grid>
                    <Grid item xs={1}><DeleteIcon className={classes.blueIcon}/></Grid>
                </Grid>)
               })
                }
           </Grid>
        </div>
    )
}
export default Custimer;
