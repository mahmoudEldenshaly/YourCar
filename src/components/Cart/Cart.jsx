import CartDeleteBtn from './CartDeleteBtn';
import CartItem from './CartItem';
import CartContext from '../Context/cartContext';
import { useContext } from 'react';
import EmptyCart from '../UI/EmptyCart';
const Cart = ({ isShown }) => {
  const cartCtx = useContext(CartContext);

  const cars = cartCtx.cars;

  const addCar = (car) => {
    cartCtx.addCar({ ...car, amount: 1 });
  };

  const removeOneCar = (id) => {
    cartCtx.removeCar(id);
  };

  const removeAllAmountOfTheCar = (id) => {
    cartCtx.removeAllCarAmount(id);
  };

  const removeAll = cartCtx.removeAll;

  return (
    <div
      className={`bg-primary z-[10000] p-5 bg-opacity-95 fixed flex items-center flex-col
       w-full max-w-[400px] gap-5 top-[88px] right-0  h-[calc(100vh-88px)] ${
         isShown ? 'animate-show' : 'animate-hide'
       }`}
    >
      {cars.length === 0 && <EmptyCart />}
      {cars.map((car) => {
        return (
          <CartItem
            img={car.img}
            name={car.name}
            carType={car.carType}
            amount={car.amount}
            onAdd={addCar.bind(null, car)}
            onRemove={removeOneCar.bind(null, car.id)}
            onRemoveAllAmount={removeAllAmountOfTheCar.bind(null, car.id)}
            key={car.id}
          />
        );
      })}
      <CartDeleteBtn removeAll={removeAll} />
    </div>
  );
};
export default Cart;
