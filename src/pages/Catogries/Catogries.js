import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useStyles  from './CatogriesStyle';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Catogries = () => {

    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <div className={classes.mainRoot}>

      <div className={classes.header}>
       <h1 >Catogries</h1>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
      <Link to="/new-catogries">
         <button className={classes.addNewBtn}>Add New Catogries</button>
        </Link>
      </div>
        </div>
          <Grid container>
                  <Grid item xs={4}>
                  <Card className={classes.root} style={{margin:"15px 0 0 15px"}}>
      <CardMedia
        className={classes.media}
        image="https://tse2.mm.bing.net/th?id=OIP.lOmrHsRggO7s-j_Y69IVKQHaGh&pid=Api&P=0&w=195&h=173"
        title="Paella dish"
        style={{margin:"20px"}}
      />
      <CardContent>
        <Typography variant="h6" >
       <b> HP Printers</b>
        </Typography>
        <p >
        HP Printers is the world best and most trustfull printer for persnal and office use
        </p>
        
      </CardContent>
      
        <IconButton >
        < DeleteIcon className={classes.blueIcon}/>
        <Link to="/view-catogries"><VisibilityIcon className={classes.greenIcon}/></Link>
        </IconButton>

    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    
                  </Grid>
          </Grid>
          
        </div>
    )
}
export  default Catogries;