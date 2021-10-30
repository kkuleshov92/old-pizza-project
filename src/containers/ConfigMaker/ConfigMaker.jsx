import React, {useEffect, useState} from 'react';

import './ConfigMaker.scss';
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import {useOrderListContext} from "../../context/OrderList";
import OrderList from "../OrderList/OrderList";
import {pizzaAdditionalFields, pizzaRequiredFields} from "./ConfigMakerData";


const ConfigMaker = () => {
  const {
    state,
    calcPriceOrder,
  } = useOrderListContext();

  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    const oldPrice = state.price;
    let price = +state.defaultPrice;

    for (let key in state.settings) {
      // eslint-disable-next-line
      state.settings[key].arrProp.forEach(item => {
        price += item.price;
      })
    }

    if (oldPrice !== price) {
      calcPriceOrder(price)
    }
  }, [state, calcPriceOrder]);

  const submitHandler = (e) => {
    e.preventDefault();

    setShowOrder(true)
  }

  return (
    <div>
      <div className="config">
        <h2 className="title config__title">Собери свою пиццу DEV</h2>

        <h3 className="config__pizza-name">Твоя пицца</h3>

        <form className="config__form" onSubmit={submitHandler}>
          {
            pizzaRequiredFields.map(list => {
              return (
                <div className="config__field-radio" key={list.propCode}>
                  <h4 className="config__prop-name">{list.propNameSection}</h4>

                  <ul className="config__list-radio-props">
                    {
                      list.varArray.map(item => (
                        <Radio propCode={list.propCode}
                               propTitle={item.propTitle}
                               price={item.price}
                               key={item.id}
                               id={item.id}/>
                      ))
                    }
                  </ul>
                </div>
              )
            })
          }

          {
            pizzaAdditionalFields.map(list => {
              return (
                <div className="config__field-checkbox" key={list.propCode}>
                  <h4 className="config__prop-name">{list.propNameSection}</h4>

                  <ul className="config__list-checkbox-props">
                    {
                      list.varArray.map(item => (
                        <Checkbox id={item.id}
                                  propTitle={item.propTitle}
                                  price={item.price}
                                  img={item.img}
                                  key={item.id}
                                  propCode={list.propCode}
                        />
                      ))
                    }
                  </ul>
                </div>
              )
            })
          }

          <button className="config__submit-btn">Заказать за {state.price} руб</button>
        </form>

        {showOrder && <OrderList setShowOrder={setShowOrder} />}
      </div>
    </div>
  )
}

export default ConfigMaker;