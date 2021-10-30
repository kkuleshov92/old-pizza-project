import ConfigMaker from "./containers/ConfigMaker/ConfigMaker";

import './index.scss';
import {OrderListProvider} from "./context/OrderList";


const App = () => {
  return (
    <OrderListProvider>
      <ConfigMaker />
    </OrderListProvider>
  )
}

export default App;