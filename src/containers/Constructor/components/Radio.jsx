import React, {useRef} from 'react';
import { useDispatch } from "react-redux";


const Radio = (props) => {
  const {
    propCode,
    propTitle,
    price,
    id,
  } = props;

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const changeHandler = () => {
    dispatch({
      type: 'required_props',
      payload: {
        propCode,
        price,
        propTitle,
      }
    })
  }

  return (
    <li className="config__item-radio-props" key={id}>
      <input type="radio"
             className="config__input-radio"
             id={`${propCode}_${id}`}
             name={propCode}
             onChange={changeHandler}
             ref={inputRef}
             defaultChecked={(id === 1)}
             hidden/>

      <label htmlFor={`${propCode}_${id}`} className="config__item-radio-label">{propTitle}</label>
    </li>
  )
}

export default Radio;