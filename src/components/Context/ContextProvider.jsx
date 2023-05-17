import { useEffect, useReducer } from 'react';
import CartContext from './cartContext.js';

const defaultState = localStorage.getItem('carsData')
  ? JSON.parse(localStorage.getItem('carsData'))
  : {
      cars: [],
    };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartCarIndex = state.cars.findIndex(
      (car) => car.id === action.car.id
    );
    const existingCartCar = state.cars[existingCartCarIndex];
    let updatedCars;

    if (existingCartCar) {
      let updatedCar;
      updatedCar = {
        ...existingCartCar,
        amount: +existingCartCar.amount + +action.car.amount,
      };

      updatedCars = [...state.cars];
      updatedCars[existingCartCarIndex] = updatedCar;
    } else {
      updatedCars = state.cars.concat(action.car);
    }

    return { cars: updatedCars };
  }

  if (action.type === 'REMOVE_ONE_CAR') {
    const existingCartCarIndex = state.cars.findIndex(
      (car) => car.id === action.id
    );

    const existingCartCar = state.cars[existingCartCarIndex];

    let updatedCars;
    if (existingCartCar.amount === 1) {
      updatedCars = state.cars.filter((car) => car.id !== action.id);
    } else {
      const updatedCar = {
        ...existingCartCar,
        amount: existingCartCar.amount - 1,
      };

      updatedCars = [...state.cars];
      updatedCars[existingCartCarIndex] = updatedCar;
    }

    return { cars: updatedCars };
  }

  if (action.type === 'REMOVE_ALL_CAR_AMOUNT') {
    const updatedCars = state.cars.filter((car) => car.id !== action.id);
    return { cars: updatedCars };
  }

  if (action.type === 'REMOVE_ALL') {
    return { cars: [] };
  }

  return defaultState;
};

const ContextProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState);

  useEffect(() => {
    localStorage.setItem('carsData', JSON.stringify(cartState));
  }, [cartState.cars]);

  const addCarHandler = (car) => {
    dispatchCartState({ type: 'ADD', car });
  };
  const removeCarHandler = (id) => {
    dispatchCartState({ type: 'REMOVE_ONE_CAR', id });
  };

  const removeAllCarAmountHandler = (id) => {
    dispatchCartState({ type: 'REMOVE_ALL_CAR_AMOUNT', id });
  };

  const removeAllCars = () => {
    dispatchCartState({ type: 'REMOVE_ALL' });
  };

  const cartContextData = {
    cars: cartState.cars,
    addCar: addCarHandler,
    removeCar: removeCarHandler,
    removeAllCarAmount: removeAllCarAmountHandler,
    removeAll: removeAllCars,
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
