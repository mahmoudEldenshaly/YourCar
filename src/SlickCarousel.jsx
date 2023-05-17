import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './components/Testimonials/TestimonialCard';

const SlickCarousel = () => {
  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className='w-full md:w-[600px] lg:w-[800px] mx-auto'>
      <Slider {...settings}>
        <TestimonialCard
          name={'mahmoud'}
          description={
            ' fkls dfjdasf kldjas fkldjasfkljasdoiwjaefoklis dajfkl asdfkl jwe daswfklsda jfkljasd foqawe fjokasd jfkldjas ofkijwedpokasfjkldasjfaewjdfasdjia sdklfjsd jdasfjkldjasfkldjas fkldjasfkl jasdfkl asdkljdsoiwejfoias djfkliwje fdasfjoiasjdfoijasdof'
          }
        />
        <TestimonialCard
          name={'mahmoud'}
          description={
            ' fkls dfjdasf kldjas fkldjasfkljasdoiwjaefoklis dajfkl asdfkl jwe daswfklsda jfkljasd foqawe fjokasd jfkldjas ofkijwedpokasfjkldasjfaewjdfasdjia sdklfjsd jdasfjkldjasfkldjas fkldjasfkl jasdfkl asdkljdsoiwejfoias djfkliwje fdasfjoiasjdfoijasdof'
          }
        />
        <TestimonialCard
          name={'mahmoud'}
          description={
            ' fkls dfjdasf kldjas fkldjasfkljasdoiwjaefoklis dajfkl asdfkl jwe daswfklsda jfkljasd foqawe fjokasd jfkldjas ofkijwedpokasfjkldasjfaewjdfasdjia sdklfjsd jdasfjkldjasfkldjas fkldjasfkl jasdfkl asdkljdsoiwejfoias djfkliwje fdasfjoiasjdfoijasdof'
          }
        />
        <TestimonialCard
          name={'mahmoud'}
          description={
            ' fkls dfjdasf kldjas fkldjasfkljasdoiwjaefoklis dajfkl asdfkl jwe daswfklsda jfkljasd foqawe fjokasd jfkldjas ofkijwedpokasfjkldasjfaewjdfasdjia sdklfjsd jdasfjkldjasfkldjas fkldjasfkl jasdfkl asdkljdsoiwejfoias djfkliwje fdasfjoiasjdfoijasdof'
          }
        />
      </Slider>
    </div>
  );
};
export default SlickCarousel;
