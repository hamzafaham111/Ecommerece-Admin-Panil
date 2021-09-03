import React from 'react';
import {Container, Box, Typography,Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
const Login = () =>{
    return(
        <div >
            <Container maxWidth={"sm"}>
<Box bgcolor={""} textAlign={"center"} borderRadius={"6px"} boxShadow={"2"} p={"24px"} mt={"100px"}>
    <Typography variant={"h4"} color={"textSecondary"} >
        Admin Login
    </Typography>
    <TextField
        label="Email"
        id="outlined-margin-none"
        className={""}
        // helperText="Some important text"
        variant="outlined"
        margin="normal"
        size={"small"}
        fullWidth
    />
    <TextField
        label="Password"
        margin="normal"
        size={"small"}
        type={"password"}
        id="outlined-margin-none"
        className={""}
        fullWidth

        // helperText="Some important text"
        variant="outlined"
    />
    <br/>
   <Link to="/dashboard"> <Button  disableElevation variant="contained" fullWidth style={{marginTop:"10px",background:"green",color:"white"}}>Login</Button></Link>
</Box>
            </Container>
            </div>

    )
}
export default Login;

