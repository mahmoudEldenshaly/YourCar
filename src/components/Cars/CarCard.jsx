import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import AmountInput from './AmountInput';
import CartContext from '../Context/cartContext.js';
import { useContext, useRef } from 'react';

const CarCard = ({ img, name, carType, description, seats, luggage, id }) => {
  const cartCtx = useContext(CartContext);
  const amount = useRef();

  const check = () => {
    if (+amount.current.value > 5) {
      amount.current.value = 5;
    }

    if (+amount.current.value < 1) {
      amount.current.value = 1;
    }
  };

  const increment = () => {
    const amountValue = +amount.current.value;
    if (amountValue < 5) {
      amount.current.value = amountValue + 1;
    }
  };

  const decrement = () => {
    const amountValue = +amount.current.value;
    if (amountValue > 1) {
      amount.current.value = amountValue - 1;
    }
  };

  const add = () => {
    cartCtx.addCar({ img, name, carType, id, amount: amount.current.value });
  };

  return (
    <div
      className='bg-white max-w-[370px] flex flex-col justify-center gap-4 
    rounded-sm shadow-car-shadow py-6 px-10  mx-auto'
    >
      <div className='imgBox flex justify-center items-center'>
        <img src={img} alt={name} className='max-w-[310px] max-h-[160px]' />
      </div>
      <div className='title text-center'>
        <p className='font-extrabold text-2xl text-secondary'>{carType}</p>
        <p>{name}</p>
      </div>
      <p className='text-sm'>{description}</p>
      <div className='text-secondary flex items-end justify-between'>
        <div className='flex flex-col gap-2'>
          <div>
            <FontAwesomeIcon icon={faUserGroup} className='mr-2 text-primary' />
            {seats}
            Seat
          </div>
          <div>
            <FontAwesomeIcon icon={faSuitcase} className='mr-2 text-primary' />
            {luggage}
            Luggage
          </div>
        </div>
        <AmountInput
          check={check}
          increment={increment}
          decrement={decrement}
          ref={amount}
        />
      </div>
      <button
        onClick={add}
        className='rounded-md border-2 border-secondary
       py-2 px-8 hover:bg-secondary hover:text-white'
      >
        Add to cart
      </button>
    </div>
  );
};
export default CarCard;
