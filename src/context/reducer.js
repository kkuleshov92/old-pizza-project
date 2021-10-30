export const reducer = (state, action) => {
  switch (action.type) {
    case 'required_props':
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.propCode]: {
            propName: state.settings[action.payload.propCode].propName,
            arrProp: [{
              value: action.payload.propTitle,
              price: action.payload.price,
            }]
          }
        }
      }
    case 'additional_props':
      if (action.payload.change > 0) {
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.payload.propCode]: {
              propName: state.settings[action.payload.propCode].propName,
              arrProp: [
                ...state.settings[action.payload.propCode].arrProp,
                {
                  value: action.payload.propTitle,
                  price: action.payload.change,
                }
              ]
            }
          }
        }
      } else {
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.payload.propCode]: {
              propName: state.settings[action.payload.propCode].propName,
              arrProp: [
                ...state.settings[action.payload.propCode].arrProp.filter(item => {
                  return item.value !== action.payload.propTitle
                })
              ]
            }
          }
        }
      }
    case 'calculating':
      return {
        ...state,
        price: action.payload,
      }
    default:
      return state
  }
}