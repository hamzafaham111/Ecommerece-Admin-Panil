import React from 'react';
import {Container, Box, Typography,Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
const Login = () =>{
    return(
        <>
            <Container maxWidth={"sm"}>
<Box bgcolor={""} textAlign={"center"} borderRadius={"6px"} boxShadow={"2"} p={"24px"} mt={"50px"}>
    <Typography variant={"h5"} color={"textSecondary"} >
        Login Form
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
    <br/>
    <CircularProgress color="secondary" size={26} thickness={5} />
    <br/>
    <Button disableElevation variant="contained" color={"primary"} fullWidth>Default</Button>
</Box>
            </Container>
            </>

    )
}
export default Login;

