import { makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  header:{
    background:"green",color:"white",padding:"10px",
},
  mainRoot:{width:"80vw",margin:"10px"},  
  root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    greenIcon:{
        color:"white", cursor:"pointer", background:"green", width:"32px", height:"32px", padding:"4px", borderRadius:"20px",boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
    },
    blueIcon:{
        color:"white", cursor:"pointer", background:"blue", width:"32px", height:"32px", padding:"4px", borderRadius:"20px",boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",marginRight:"15px",
    },
    editButton:{
      background:"green",
      padding:"10px 20px 10px 20px",
      color:"white",
      borderRadius:"5px"
    },
    addNewBtn:{background:"green",padding:"10px",color:"green",  border:"solid green 1px",  borderRadius:"5px",background:"white"},




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

  }));
  export default useStyles;