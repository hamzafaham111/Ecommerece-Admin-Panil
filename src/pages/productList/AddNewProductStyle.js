import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    root:{width:"80vw"},
    form:{width:"40vw",margin:"auto",marginTop:"5vh"},
    inputField:{  fontSize:"20px"},
    input:{
        width:"100%",
        border:"solid black 1px",
        padding:"10px",
        marginTop:"10px",
        borderRadius:"5px",
        outline:"none",
        background:"white"
    },
    addNewProductFormBtn:{
        width:"100%",
        border:"solid black 1px",
        padding:"10px",
        marginTop:"5px",
        background:"green",
        color:"white",
        fontWeight:"bold",
        borderRadius:"5px",
    }
})
export default useStyles;