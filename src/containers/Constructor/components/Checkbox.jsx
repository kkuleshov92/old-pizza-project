import React, {useRef} from 'react';
import {useOrderListContext} from "../../../context/OrderList";

const Checkbox = (props) => {
  const {
    id,
    propTitle,
    price,
    img,
    propCode,
  } = props

  const {
    onChangeAdditional
  } = useOrderListContext()

  const inputRef = useRef(null);

  const changeHandler = () => {
    const flag = inputRef.current.checked;

    let change = parseFloat(flag ? price : `-${price}`);
    onChangeAdditional('additional_props', propCode, change, propTitle)
  }

  return (
    <li className="config__item-checkbox-props" key={id}>
      <label className="config__item-checkbox-label">
        {
          img && <img src={img} alt=""/>
        }

        <h5 className="config__checkbox-name">
          {propTitle}
        </h5>

        <p>
          {price} р
        </p>

        <input type="checkbox"
               ref={inputRef}
               onChange={changeHandler}
               className="config__input-checkbox"
               hidden
               name={`${propCode}_${id}`}/>

        <span className="config__checkbox-marker"></span>
      </label>
    </li>
  )
}

export default Checkbox;