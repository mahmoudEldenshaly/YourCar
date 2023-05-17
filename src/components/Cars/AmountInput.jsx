import { forwardRef, useRef } from 'react';

const AmountInput = forwardRef(
  ({ carAmount, increment, decrement, check }, ref) => {
    return (
      <div className='text-white text-2xl flex gap-2 items-center'>
        <button
          onClick={decrement}
          className='bg-secondary rounded-l-md w-8 h-8'
        >
          -
        </button>
        <input
          ref={ref}
          onBlur={check}
          defaultValue={1}
          type='number'
          className='text-primary w-8 appearance-none text-center outline-none'
        />
        <button
          onClick={increment}
          className='bg-secondary rounded-r-md w-8 h-8'
        >
          +
        </button>
      </div>
    );
  }
);
export default AmountInput;
