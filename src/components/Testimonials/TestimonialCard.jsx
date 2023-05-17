import star from '../../assets/images/icons/testimonialStar.svg';
import testimonialCar from '../../assets/images/testimonial-car.png';
const TestimonialCard = ({ name, description }) => {
  return (
    <figure
      className='bg-red-300 flex flex-col items-center justify-center gap-6 relative
     text-primary text-center pt-12 pb-8 px-12  md:w-[600px] lg:w-[800px]'
    >
      <blockquote className='md:max-w-[70%] italic md:text-xl'>
        {description}
      </blockquote>
      <figcaption className='flex flex-col gap-6'>
        <div className='stars flex '>
          <img width={26} src={star} alt='star' />
          <img width={26} src={star} alt='star' />
          <img width={26} src={star} alt='star' />
          <img width={26} src={star} alt='star' />
          <img width={26} src={star} alt='star' />
        </div>
        <div>
          <p>{name}</p>
          <span> Las vegas</span>
        </div>
      </figcaption>
      {/* <div
        className='absolute bottom-[0] right-[0] translate-x-[25%] translate-y-[25%]
       w-32 md:w-60 lg:w-auto lg:translate-x-[35%] lg:translate-y-[35%]'
      >
        <img
          src={testimonialCar}
          alt='testimonial car'
          className='max-w-full'
        />
      </div> */}
    </figure>
  );
};
export default TestimonialCard;
