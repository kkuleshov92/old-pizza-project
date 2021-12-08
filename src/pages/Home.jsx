import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../config/constants";
import Order from "../containers/Order/Order";
import OrdersTable from "../containers/OrdersTable/OrdersTable";
import Constructor from "../containers/Constructor/Constructor";
import Header from "../containers/Header/Header";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header/>

      <Switch>
        <Route exact path={ROUTES.home} component={Constructor}/>
        <Route exact path={ROUTES.order} component={Order}/>
        <Route exact path={ROUTES.ordersTable} component={OrdersTable}/>
      </Switch>
    </div>
  )
}

export default Home;