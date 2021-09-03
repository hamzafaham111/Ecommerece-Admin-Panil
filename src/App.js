import React from 'react';
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Drivers from './pages/Driver/Drives';
import {createMuiTheme, useTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";
import Page404 from "./pages/NotFound/Page404";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Master from "./master";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#151d8c",
            light: '#3c44b126'
        },
        secondary: {
            main: "#e0192d",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
})

function App() {
  return (
      <ThemeProvider theme={theme} >
    <div className="App">
       <Router>
           <Route exact path={"/"} component={Master}/>
           <Route exact path="/login">
               <Login/>
           </Route>
       </Router>
    </div>
      </ThemeProvider>
  );
}

export default App;
