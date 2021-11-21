import './index.scss';
import { OrderListProvider } from "./context/OrderList";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config/constants";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";


const App = () => {
  return (
    <AuthProvider>
      <OrderListProvider>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path={ROUTES.login} component={Login}/>
          <Route exact path={ROUTES.registration} component={Registration}/>
          <Route path={ROUTES.home} component={Home}/>

          <Route component={NotFound}/>
        </Switch>
      </OrderListProvider>
    </AuthProvider>
  )
}

export default App;