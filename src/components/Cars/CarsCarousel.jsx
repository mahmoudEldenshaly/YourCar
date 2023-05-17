import CarCard from './CarCard';
import Title from '../UI/Title';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarsCarousel = () => {
  const [carsStateData, setCarsStateData] = useState([]);
  const dataUrl = '../../../public/data.json';
  useEffect(() => {
    const getCarsData = async () => {
      const res = await fetch(dataUrl);
      const data = await res.json();
      const carsData = data.cars;
      setCarsStateData(carsData);
    };
    getCarsData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <section className='bg-background py-12 lg:p-24 px-8'>
      <Title title={'Cars'} ghostTitle={'CARS'} titleColor={'text-secondary'} />
      <div className='container mx-auto'>
        <Slider {...settings}>
          {carsStateData.map((car) => {
            return (
              <CarCard
                img={car.image}
                name={car.name}
                carType={car.class}
                description={car.description}
                seats={car.seats}
                luggage={car.luggage}
                id={car.id}
                key={car.id}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
export default CarsCarousel;
