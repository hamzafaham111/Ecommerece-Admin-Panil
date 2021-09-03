import React from 'react'
import {Grid} from '@material-ui/core'
import { Typography } from '@material-ui/core'
const CustomerView = () => {
    return (
        <div style={{width:"80%",margin:"20px"}}>
            <Grid container style={{background:"green",color:"white",padding:"10px"}}>
                <h1>User Profile</h1>
            </Grid>
            <Grid container style={{display:"flex",flexDirection:"row",background:"white",marginTop:"20px",border:"solid green 1px",borderRadius:"15px",padding:"10px"}}>
                <Grid item xs={3} style={{display:"flex",justifyContent:"center"}}>
                    <img src="https://pbs.twimg.com/profile_images/1119997298086486017/FbmUAYZS.jpg" style={{width:"150px", height:"150px",borderRadius:"50%", alignItems:"flex-end",margin:"auto",}}/>
                </Grid>
                <Grid item xs={9} style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingLeft:"20px",marginBottom:"20px"}}>
                    <Typography><b>Name: Hamza Faham</b></Typography>
                    <Typography><b>User Id: 0000.000000000.000000</b></Typography>
                    <Typography><b>User Email: hamzafaham111@gmail.com</b></Typography>
                </Grid>
            </Grid>
            <Grid container  style={{background:"white",marginTop:"20px",}}>     
          {/* <Grid container item xs={12} style={{borderBottom:"solid #CBCBCB 1px", padding:"5px",borderBottom:"solid #CBCBCB 1px",padding:"10px" }}>
                <Grid item xs={4}> Phone Number</Grid>
                <Grid item xs={4}> City</Grid>
                <Grid item xs={4}> Data Created</Grid>
          </Grid>
            <Grid container item xs={12} style={{borderBottom:"solid #CBCBCB 1px", padding:"5px",padding:"10px" }}>
            <Grid item xs={4}> 03169650686</Grid>
                <Grid item xs={4}> Lahore</Grid>
                <Grid item xs={4}> 2021-7-25</Grid>
            </Grid> */}
            <Grid container xs={6} style={{borderRadius:"5px"}}>
            <Grid container item xs={12} style={{borderBottom:"solid #CBCBCB 1px", padding:"5px",borderBottom:"solid #CBCBCB 1px",padding:"10px" }}>
                <Grid item xs={4}> Phone Number</Grid>
                <Grid item xs={4}> City</Grid>
                <Grid item xs={4}> Data Created</Grid>
          </Grid>
            <Grid container item xs={12} style={{borderBottom:"solid #CBCBCB 1px", padding:"5px",padding:"10px" }}>
            <Grid item xs={4}> 03169650686</Grid>
                <Grid item xs={4}> Lahore</Grid>
                <Grid item xs={4}> 2021-7-25</Grid>
            </Grid>
            </Grid>
            <Grid container xs={6} style={{borderRadius:"5px"}}>
            <Grid container item xs={12} style={{borderBottom:"solid #CBCBCB 1px", padding:"5px",borderBottom:"solid #CBCBCB 1px",padding:"10px" }}>
                <Grid item xs={4}> Number Of Orders</Grid>
                <Grid item xs={4}> Orders Completed</Grid>
                <Grid item xs={4}> Canceled</Grid>
          </Grid>
            <Grid container item xs={12} style={{borderBottom:"solid #CBCBCB 1px", padding:"5px",padding:"10px" }}>
            <Grid item xs={4}> 10</Grid>
                <Grid item xs={4}> 8</Grid>
                <Grid item xs={4}> 2</Grid>
            </Grid>
            </Grid>
            </Grid>
        </div>
    )
}
export default CustomerView;
