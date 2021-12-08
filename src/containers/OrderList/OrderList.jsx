import React from 'react';

import './OrderList.scss';


const OrderList = ({setShowOrder}) => {
  const onCloseModal = (e) => {
    (e.currentTarget === e.target) && setShowOrder(false)
  }

  return (
    <div className="orderList__overlay" onClick={onCloseModal}>
      <div className="orderList__modal">
        <h3 className="orderList__title">
          Ваш заказ
        </h3>

        <div className="orderList__table">
          <div className="orderList__item">
            Базовая цена - 200 р.
          </div>

          {/*{*/}
          {/*  Object.values(state.settings).map(item => {*/}
          {/*    return (item.arrProp.length*/}
          {/*        ? (<div className="orderList__item" key={item.propName}>*/}
          {/*          <h5 className="orderList__item-title">*/}
          {/*            {item.propName}*/}
          {/*          </h5>*/}

          {/*          {*/}
          {/*            item.arrProp.map(propItem => {*/}
          {/*              return (*/}
          {/*                <div className="orderList__item-row" key={propItem.value}>*/}
          {/*                  {`${propItem.value}${(propItem.price > 0) ? (` - ${propItem.price} р.`) : ''}`}*/}
          {/*                </div>*/}
          {/*              )*/}
          {/*            })*/}
          {/*          }*/}
          {/*        </div>)*/}
          {/*        : null*/}
          {/*    )*/}
          {/*  })*/}
          {/*}*/}
        </div>

        <p className="orderList__total-price">
          Общая сумма  р.
        </p>
      </div>
    </div>
  )
}

export default OrderList;