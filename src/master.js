import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import Login from "./pages/Login";
import Custimer from "./pages/Customers/Custimer";
import Home from "./pages/home/Home";
import Orders from "./pages/Orders/Orders";
import ProductList from "./pages/productList/ProductList";
import Page404 from "./pages/NotFound/Page404";
import CustomerView from "./pages/Customers/CustomerView";
import Catogries from "./pages/Catogries/Catogries";
import Messeges from './pages/Messeges/Messeges';
import AddNewProduct from './pages/productList/AddNewProduct'
import OrderView from "./pages/Orders/OrderView";
import MessegeView from "./pages/Messeges/MessegeView";
import { ViewCatogries } from "./pages/Catogries/ViewCatogries";
import EditProduct from "./pages/productList/EditProduct";
import AddNewCatogries from "./pages/Catogries/AddNewCatogries";
const Master = () =>{
    return(
        <>

            <Router>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>          
                        <Route path="/custimer">
                            <Custimer />
                        </Route>
                        <Route path="/CustomerView">
                            <CustomerView/>
                        </Route>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                        <Route path="/edit-product">
                            <EditProduct />
                        </Route>
                        <Route path="/orders">
                            <Orders />
                        </Route>
                        <Route path="/catogries">
                            <Catogries />
                        </Route>
                        <Route path="/add-new-Product">
                            <AddNewProduct />
                        </Route>
                        <Route path="/order-view">
                            <OrderView />
                        </Route>
                        <Route path="/view-catogries">
                            <ViewCatogries/>
                        </Route>
                        <Route path="/new-catogries">
                            <AddNewCatogries/>
                        </Route>
                        <Route path="/messege-view">
                            <MessegeView/>
                        </Route>
                        <Route path="/messeges">
                            <Messeges/>
                        </Route>
                        <Route component={Page404} />
                    </Switch>
                </div>
            </Router>
            </>

    )
}
export default Master;
