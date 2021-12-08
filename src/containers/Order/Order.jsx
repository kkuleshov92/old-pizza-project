import React from 'react';

import { useForm } from "react-hook-form";


const Order = () => {
  const {register, handleSubmit} = useForm()

  const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, '')
        .match(/.{1,4}/g)
        ?.join(' ')
        .substr(0, 19) || ''
    )
  }

  // const normalizeCardDate = (value) => {
  //   return (
  //     value
  //       .replace(/\s/g, '')
  //       .match(/.{2}/g)
  //       ?.join('/')
  //       .substr(0, 7) || ''
  //   )
  // }

  const cardNumber = register('card_number');
  const cardDate = register('card_date');

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="receipt">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <h4>
            Адрес доставки
          </h4>

          <input id="card_number" {...register('card_number')}/>

          <div>
            <div>
              <label htmlFor="">подъезд</label>

              <input id="porch_home" {...register('porch_home')}/>
            </div>

            <div>
              <label htmlFor="">этаж</label>

              <input id="floor_home" {...register('floor_home')}/>
            </div>

            <div>
              <label htmlFor="">квартира</label>

              <input id="flat_home" {...register('flat_home')}/>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <h4>
            Данные для оплаты
          </h4>

          <input
            {...register('card_number')}
            ref={cardNumber.ref}
            onBlur={cardNumber.onBlur}
            onChange={(event) => {
              cardNumber.onChange(event)
              event.target.value = normalizeCardNumber(event.target.value)
            }}
            placeholder="0000 0000 0000 0000"/>

          <div>
            <input
              {...register('card_date')}
              ref={cardDate.ref}
              onBlur={cardDate.onBlur}
              onChange={(event) => {
                cardDate.onChange(event)
                // event.target.value = normalizeCardDate(event.target.value)
              }}
              placeholder="MM/YYYY"/>

            <input {...register('card_cvv')} maxLength='3' placeholder="CVV"/>
          </div>

          <input {...register('card_name')} placeholder="Имя как на карте"/>
        </fieldset>

        <button>
          Оплатить
        </button>
      </form>
    </section>
  )
}

export default Order;