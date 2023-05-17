import car1 from '../../assets/images/cars/Car-1.png';
import car2 from '../../assets/images/cars/Car-2.png';
import car3 from '../../assets/images/cars/Car-3.png';
import car4 from '../../assets/images/cars/Car-4.png';
import car5 from '../../assets/images/cars/Car-5.png';
import car6 from '../../assets/images/cars/Car-6.png';
import car7 from '../../assets/images/cars/Car-7.png';
import car8 from '../../assets/images/cars/Car-8.png';
import car9 from '../../assets/images/cars/Car-9.jpg';
import CarImgFigure from './CarImgFigure';
CarImgFigure;
const CarsGallery = () => {
  return (
    <section
      className='container bg-black bg-opacity-30 text-white text-center grid grid-cols-2 justify-center 
      mx-auto max-w-[1200px] md:grid-cols-3
 '
    >
      <CarImgFigure carImg={car1} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car2} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car3} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car4} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car5} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car6} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car7} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car8} name={'Tesla Model 3'} />
      <CarImgFigure carImg={car9} name={'Tesla Model 3'} />
    </section>
  );
};
export default CarsGallery;
