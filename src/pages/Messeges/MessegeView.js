import React from 'react'
import useStyle from './MessegeStyle';
const MessegeView = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
        <div className={classes.header}>
            <h3>User Messege</h3>
        </div>
            <div style={{width:"50%",marginTop:"20px"}}>
                <p style={{border:"solid black 1px",padding:"5px",borderRadius:"5px",background:"gray ",color:"white"}}>Hamza Faham</p>
                <p style={{border:"solid black 1px",padding:"5px",borderRadius:"5px",background:"gray ",color:"white"}}>03165766353</p>
                <p style={{border:"solid black 1px",padding:"5px",borderRadius:"5px",background:"gray ",color:"white"}}>hamzafaham111@gmail.com</p>
                <p style={{border:"solid black 1px",padding:"5px",borderRadius:"5px",background:"gray ",color:"white"}}>Hellow sir I am hamza faham yousafzai from karachi pakistan, I am facing an issue while ordering products from your website for last two days. After placing my prder and clicking on checkout the website is not moving to next components</p>
                <p style={{textAlign:"right"}}><span>3 jun 2021/ 11:27PM</span></p>
            </div>

            
        </div>
    )
}
export default MessegeView;