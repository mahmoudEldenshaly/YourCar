import React from 'react';

const CartContext = React.createContext({
  cars: [],
  addCar: (car) => {},
  removeCar: (id) => {},
  removeAllCarAmount: (id) => {},
  removeAll: () => {},
});

export default CartContext;
