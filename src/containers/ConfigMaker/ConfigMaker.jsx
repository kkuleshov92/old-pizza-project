import React, {useEffect, useState} from 'react';

import './ConfigMaker.scss';
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import {useOrderListContext} from "../../context/OrderList";
import OrderList from "../OrderList/OrderList";


const ConfigMaker = () => {
  const {
    state,
    calcPriceOrder,
  } = useOrderListContext();

  const [showOrder, setShowOrder] = useState(false);

  const pizzaRequiredFields = [
    {
      propNameSection: 'Размер',
      propCode: 'size',
      varArray: [
        {
          propTitle: '30 см',
          price: 0,
          id: 1,
        },
        {
          propTitle: '35 см',
          price: 50,
          id: 2,
        }
      ]
    },
    {
      propNameSection: 'Тесто',
      propCode: 'dough',
      varArray: [
        {
          propTitle: 'Тонкое',
          price: 0,
          id: 1,
        },
        {
          propTitle: 'Пышное',
          price: 0,
          id: 2,
        }
      ]
    },
    {
      propNameSection: 'Соус',
      propCode: 'sauce',
      varArray: [
        {
          propTitle: 'томатный',
          price: 0,
          id: 1,
        },
        {
          propTitle: 'белый',
          price: 0,
          id: 2,
        },
        {
          propTitle: 'острый',
          price: 0,
          id: 3,
        }
      ]
    },
  ]

  const pizzaAdditionalFields = [
    {
      propNameSection: 'Добавьте сыр',
      propCode: 'cheese',
      varArray: [
        {
          id: 1,
          propTitle: 'Моцарелла',
          price: 29,
          img: '',
        },
        {
          id: 2,
          propTitle: 'Чеддер',
          price: 29,
          img: '',
        },
        {
          id: 3,
          propTitle: 'Дор Блю',
          price: 29,
          img: '',
        },
      ]
    },
    {
      propNameSection: 'Добавьте овощи',
      propCode: 'vegetables',
      varArray: [
        {
          id: 1,
          propTitle: 'Томаты',
          price: 29,
          img: '',
        },
        {
          id: 2,
          propTitle: 'Грибы',
          price: 29,
          img: '',
        },
        {
          id: 3,
          propTitle: 'Перец',
          price: 29,
          img: '',
        },
        {
          id: 4,
          propTitle: 'Ананас',
          price: 29,
          img: '',
        },
        {
          id: 5,
          propTitle: 'Оливки',
          price: 29,
          img: '',
        },
        {
          id: 6,
          propTitle: 'Лук',
          price: 29,
          img: '',
        },
        {
          id: 7,
          propTitle: 'Брокколи',
          price: 29,
          img: '',
        },
      ]
    },
    {
      propNameSection: 'Добавьте мясо',
      propCode: 'meat',
      varArray: [
        {
          id: 1,
          propTitle: 'Бекон',
          price: 29,
          img: '',
        },
        {
          id: 2,
          propTitle: 'Пепперони',
          price: 29,
          img: '',
        },
        {
          id: 3,
          propTitle: 'Ветчина',
          price: 29,
          img: '',
        },
        {
          id: 4,
          propTitle: 'Курица',
          price: 29,
          img: '',
        },
      ]
    },
  ]

  useEffect(() => {
    const oldPrice = state.price;
    let price = +state.defaultPrice;

    for (let key in state.settings) {
      state.settings[key].arrProp.forEach(item => {
        price += item.price;
      })
    }

    if (oldPrice !== price) {
      calcPriceOrder(price)
    }
  }, [state]);

  const submitHandler = (e) => {
    e.preventDefault();

    setShowOrder(true)
  }

  return (
    <div>
      <div className="config">
        <h2 className="title config__title">Собери свою пиццу</h2>

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