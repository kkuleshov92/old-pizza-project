import React from 'react';

import { Link, useHistory } from "react-router-dom";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import { pizzaAdditionalFields, pizzaRequiredFields } from "./ConstructorData";

import './Constructor.scss';
import { ROUTES } from "../../config/constants";
import { useSelector } from "react-redux";


const Constructor = () => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    history.push(ROUTES.order);
  }

  const price = useSelector(state => state.price);

  return (
    <div>
      <div className="config">
        <Link to="/">В главное меню</Link>

        <h2 className="title config__title">Собери свою пиццу v.1.1</h2>

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

          <button className="config__submit-btn">Заказать {price} за руб</button>
        </form>
      </div>
    </div>
  )
}

export default Constructor;