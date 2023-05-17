import locationIcon from '../../assets/images/icons/contactIcons/location.svg';
import phoneIcon from '../../assets/images/icons/contactIcons/phone.svg';
import emailIcon from '../../assets/images/icons/contactIcons/email.svg';
import facebookIcon from '../../assets/images/icons/contactIcons/facebook.svg';
import twitterIcon from '../../assets/images/icons/contactIcons/twitter.svg';
import instaIcon from '../../assets/images/icons/contactIcons/insta.svg';

const Footer = () => {
  return (
    <>
      <footer
        className='container mx-auto text-center p-16 pb-5 grid gap-6 items-start place-items-center md:px-4 md:grid-cols-3
       lg:gap-16 lg:justify-between  border-b-2 border-red-800'
      >
        <div className='YourCar text-center md:text-start flex flex-col gap-5'>
          <h3 className='text-[32px] text-secondary'>
            <span className='font-bold'>Your</span>Car
          </h3>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>

          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>

        <div className='NewsLetter flex flex-col items-center justify-center gap-5'>
          <h3 className='text-2xl font-semibold text-secondary'>News Letter</h3>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className='w-full justify-center items-center flex flex-col gap-5 xl:flex-row '>
            <button className='bg-secondary text-white w-fit font-bold text-lg  px-8 py-2'>
              Subscribe
            </button>
            <input
              type='email'
              placeholder='Email'
              className='border border-secondary w-full px-6 py-4'
            />
          </div>
        </div>

        <div className='Contact flex flex-col gap-5 text-start '>
          <h3
            className='text-2xl ml-6 
           font-semibold text-secondary'
          >
            Contact
          </h3>
          <address className='flex items-center gap-4'>
            <img src={locationIcon} alt='location icon' />
            <div>
              2038 2nd Avenue,
              <br />
              Las Vegas, United States
            </div>
          </address>

          <div className='flex items-center gap-4'>
            <img src={phoneIcon} alt='phone icon' />
            <div>
              <p>
                01444773421423
                <br />
                01477678449405
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <img src={emailIcon} alt='email icon' />
            <p>info@YourCar.com</p>
          </div>
        </div>

        <div className='Social col-span-full flex items-center justify-center gap-8'>
          <img
            src={facebookIcon}
            alt='facebook icon'
            className='w-[30px] h-[30px]'
          />
          <img
            src={twitterIcon}
            alt='twitter icon'
            className='w-[30px] h-[30px]'
          />
          <img
            src={instaIcon}
            alt='instagram icon'
            className='w-[30px] h-[30px]'
          />
        </div>
      </footer>

      <span className='w-full h-[2px] bg-red-800'></span>

      <div className='copy text-center text-[12px] pt-8 pb-3'>
        &copy; Copyright 2023 ·<span className='font-semibold'>YourCar </span>
        All rights reserved
      </div>
    </>
  );
};
export default Footer;
