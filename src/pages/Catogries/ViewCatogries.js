import React from 'react'
import useStyles from './CatogriesStyle'
export const ViewCatogries = () => {
const classes = useStyles();
    return (
        <div className={classes.mainRoot}>
            <div style={{maxWidth:"500px", margin:"auto",background:"white",padding:"20px"}}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.lOmrHsRggO7s-j_Y69IVKQHaGh&pid=Api&P=0&w=195&h=173" style={{width:"100%",height:"300px"}}/>
            <h3>Catogerie Name Write With Your Reader in Mind</h3>
            <p>
            Example of Grammarly's tone detection
            NEW & NOTEWORTHY
            Write With Your Reader in Mind
            Grammarly now organizes your writing feedback by theme, so you can see how each change will help your readers better understand your message.
            </p>
            <p>
            Example of Grammarly's tone detection
            NEW & NOTEWORTHY
            Write With Your Reader in Mind
            Grammarly now organizes your writing feedback by theme, so you can see how each change will help your readers better understand your message.
            </p>
            <button className={classes.editButton}>Edit Product</button>
            </div>
        </div>
    )
}
