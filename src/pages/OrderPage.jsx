import React from 'react';
import ConfigMaker from "../containers/ConfigMaker/ConfigMaker";
import {Route} from "react-router-dom";
import Home from "./Home";



const OrderPage = () => {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/order/:pizza_id" component={ConfigMaker}/>
    </>
  )
}

export default OrderPage;