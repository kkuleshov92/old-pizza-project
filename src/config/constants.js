export const initPizza = {
  settings: {
    size: {
      propName: 'Размер',
      arrProp: [{
        price: 0,
        value: '30 см',
      }]
    },
    dough: {
      propName: 'Тесто',
      arrProp: [{
        price: 0,
        value: 'Тонкое',
      }]
    },
    sauce: {
      propName: 'Соус',
      arrProp: [{
        price: 0,
        value: 'томатный',
      }]
    },
    cheese: {
      propName: 'Сыр',
      arrProp: [],
    },
    vegetables: {
      propName: 'Овощи',
      arrProp: [],
    },
    meat: {
      propName: 'Мясо',
      arrProp: [],
    },
  },
  defaultPrice: 200,
  price: 200,
}

export const ROUTES = {
  registration: '/registration',
  login: '/login',
  order: '/home/order',
  ordersTable: '/home/orders-table',
  home: '/home',
}