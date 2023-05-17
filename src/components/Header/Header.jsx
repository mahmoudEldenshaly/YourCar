import { useState } from 'react';
import Nav from './Nav';

const Header = ({ onCartClick }) => {
  return (
    <header className='bg-background-image text-white h-screen bg-no-repeat bg-cover bg-center '>
      <Nav onCartClick={onCartClick} />
      <div className='container mx-auto '>
        <div className='pt-32 md:text-right flex flex-col items-end'>
          <div
            className='px-3 text-center h-[70vh] flex flex-col gap-4 items-center
          md:w-1/2 md:text-right md:h-auto md:items-end md:gap-10 '
          >
            <h2 className='text-4xl font-bold md:text-6xl'>
              Find the perfect car for you at YourCar.{' '}
            </h2>
            <p
              className='text-xl md:text-3xl bg-black bg-opacity-40 p-5 
            md:bg-inherit md:p-0'
            >
              We offer a wide range of cars that cater to your needs and budget.
              Visit us today and drive away with your dream car!
            </p>
            <button
              className='rounded-lg text-2xl w-fit border-2 border-solid border-gray-50 py-3 px-8
             hover:bg-secondary mt-auto'
            >
              <a href='#'>Discover</a> &#x2197;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
