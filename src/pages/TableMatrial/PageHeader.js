import React from 'react';
import {Paper, Card, Typography, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fdfdfd"
    },
    pageHeader:{
        padding: theme.spacing(4),
        display: "flex",
        marginBottom: theme.spacing(2)
    },
    pageIcon:{
        display: "inline-block",
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
"& .MuiTypography-subtitle2":{
            opacity: ".6"
},

    }

}))

const PageHeader = (props) =>{
    const {title,subtitle,icon} = props;

    const classes = useStyles();
    return(
        <>

<Paper elevation={0} square className={classes.root}>
    <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
            {icon}
        </Card>
        <div className={classes.pageTitle}>
            <Typography component="div" variant={"h6"} >
                {title}
            </Typography>
            <Typography component="div" variant={"subtitle2"} >
                {subtitle}
            </Typography>
        </div>
    </div>
</Paper>

            </>

    )


}
export default PageHeader
