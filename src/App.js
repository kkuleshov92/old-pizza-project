import './index.scss';
import {OrderListProvider} from "./context/OrderList";
import OrderPage from "./pages/OrderPage";


const App = () => {
  return (
    <OrderListProvider>
      <OrderPage />
    </OrderListProvider>
  )
}

export default App;