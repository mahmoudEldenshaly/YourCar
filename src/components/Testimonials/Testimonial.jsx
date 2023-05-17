import { useEffect, useState } from 'react';
import Title from '../UI/Title';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const dataUrl = '../../../public/data.json';
  useEffect(() => {
    const getCarsData = async () => {
      const res = await fetch(dataUrl);
      const data = await res.json();
      const testimonialsData = data.testimonials;
      setTestimonials(testimonialsData);
    };
    getCarsData();
  }, []);

  return (
    <section
      className='bg-primary flex flex-col items-center justify-center
     text-white px-6 py-24  overflow-hidden'
    >
      <Title
        title={'Testimonials'}
        ghostTitle={'TESTIMONIALS'}
        titleColor={'text-white'}
      />

      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.name}
          name={testimonial.name}
          description={testimonial.description}
        />
      ))}
    </section>
  );
};
export default Testimonial;
