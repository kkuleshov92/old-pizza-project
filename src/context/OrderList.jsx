import React, {createContext, useContext, useReducer} from 'react';
import {initPizza} from "../config/constants";
import {reducer} from "./reducer";


const OrderListContext = createContext()

export const OrderListProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initPizza);

  const onChangeAdditional = (type, propCode, change, propTitle, propName) => {
    dispatch({
      type: 'additional_props',
      payload: {
        propCode,
        change,
        propTitle,
        propName,
      },
    })
  }

  const onChangeRequired = (type, propCode, price, propTitle, propName) => {
    dispatch({
      type: 'required_props',
      payload: {
        propCode,
        price,
        propTitle,
        propName,
      }
    })
  }

  const calcPriceOrder = (price) => {
    dispatch({
      type: 'calculating',
      payload: price,
    })
  }

  return (
    <OrderListContext.Provider value={{onChangeAdditional, onChangeRequired, state, calcPriceOrder}}>
      {children}
    </OrderListContext.Provider>
  )
}

export const useOrderListContext = () => useContext(OrderListContext);