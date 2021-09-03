import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    addNewBtn:{background:"green",padding:"10px",color:"white",  border:"solid green 1px",  borderRadius:"5px","&:hover":{
        background:"white",
        border:"solid green 1px",
        color:"green",
    },},
    root:{
    width:"80vw",margin:"10px"
},
    greenIcon:{
        color:"white", cursor:"pointer", background:"green", width:"32px", height:"32px", padding:"4px", borderRadius:"20px",boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
    },
    blueIcon:{
        color:"white", cursor:"pointer", background:"blue", width:"32px", height:"32px", padding:"4px", borderRadius:"20px",boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
    },
    messege:{
        borderBottom:"solid #CBCBCB 1px",padding:"10px 0 10px 0",display:"flex",flexDirection:"row",alignItems:"center",
    },
    headerManue:{
        borderBottom:"solid gray 1px", padding:"15px 0 15px 15px",background:"#5E4FBF",color:"white",marginTop:"10px"
    },
    header:{
        background:"green",color:"white",padding:"10px",
    },
    customer:{
        borderBottom:"solid #CBCBCB 1px",padding:"10px 0 10px 10px",display:"flex",flexDirection:"row",alignItems:"center",background:"white",
    },
  }));
  export default useStyles;