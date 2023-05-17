import aboutCar from '../../assets/images/pngegg 1.png';
import aboutCarBg from '../../assets/images/pngegg (1) 1.png';

const About = () => {
  return (
    <section
      className='container px-3 mx-auto py-24 gap-10
     md:flex md:gap-20
    '
    >
      <div className='flex-1 text-center md:text-left'>
        <span
          className='ghost-title text-7xl relative -bottom-8 -z-10 font-bold text-gray-300
        md:text-7xl xl:text-9xl 
        '
        >
          About Us
        </span>
        <h3 className='text-secondary font-bold text-4xl mb-8 lg:text-5xl xl:text-6xl'>
          About
        </h3>
        <p className='text-left '>
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients' unique preferences
          and requirements. We have an extensive selection of high-end vehicles,
          ranging from sports cars to SUVs, all of which are maintained to the
          highest standards of quality and safety.
          <br />
          <br />
          At YourCar, we are committed to creating a stress-free and enjoyable
          car buying experience. We understand that purchasing a luxury car can
          be a significant investment, which is why we offer flexible financing
          options to make the process more manageable. Our team is available to
          answer any questions and provide guidance throughout the entire buying
          process. We take pride in our outstanding customer service and
          attention to detail, and we are confident that our clients will be
          satisfied with their experience at YourCar.
        </p>
      </div>
      <div className='flex-1'>
        <div className='hidden car-box items-center justify-center relative h-full md:flex '>
          <div className='car self-center'>
            <img src={aboutCar} alt='car' />
          </div>
          <div className='absolute right-[220px] z-[-1]'>
            <img src={aboutCarBg} alt='about car background' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
