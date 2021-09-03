import React from 'react'
import Data from  './MessegesApi';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useStyles from './MessegeStyle';
import { Link } from 'react-router-dom';
const Messeges = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container className={classes.header}>
            <h1 >Users Messeges</h1>
        </Grid>
        <Grid container  style={{marginTop:"10px"}}>
                                <Grid container item xs={12}  className={classes.messege}>
                                            <Grid item xs={1}><b>ID</b></Grid>
                                            <Grid item xs={1}><b>Name</b></Grid>
                                            <Grid item xs={2}><b>Phone Number</b></Grid>
                                            <Grid item xs={3}><b>Email</b></Grid>
                                            <Grid item xs={3}><b>Messege</b></Grid>
                                            <Grid item xs={1}><b>Delete</b></Grid>
                                            <Grid item xs={1}><b>View</b></Grid>
                                </Grid>
            </Grid>
            <Grid container  style={{marginTop:"10px"}}>
                        {
                            Data.map((val)=>{
                               return(
                                <Grid container item xs={12}  className={classes.messege}>
                                            <Grid item xs={1}>{val.ID}</Grid>
                                            <Grid item xs={1}>{val.Name}</Grid>
                                            <Grid item xs={2}>{val. Phone_Number}</Grid>
                                            <Grid item xs={3}>{val.Email}</Grid>
                                            <Grid item xs={3}>{val. Messege}</Grid>
                                            <Grid item xs={1}><DeleteIcon className={classes.blueIcon}/></Grid>
                                            <Grid item xs={1}><Link to="/messege-view"><VisibilityIcon className={classes.greenIcon}/></Link></Grid>
                                </Grid>
                               )
                            })
                        }
            </Grid>
        </div>
    )
}
export  default Messeges;