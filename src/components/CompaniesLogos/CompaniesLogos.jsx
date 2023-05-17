import logo1 from '../../assets/images/logos/BMW.svg';
import logo2 from '../../assets/images/logos/Subaru.png';
import logo3 from '../../assets/images/logos/Volvo.svg';
import logo4 from '../../assets/images/logos/Suzuki.svg';
import logo5 from '../../assets/images/logos/Toyota.svg';
import logo6 from '../../assets/images/logos/Nissan.svg';
import logo7 from '../../assets/images/logos/MITSUBISHI.svg';
import logo8 from '../../assets/images/logos/Mercedes.svg';
import Logo from './Logo';

const CompaniesLogos = () => {
  return (
    <section className='bg-gray-100 p-8 lg:py-24'>
      <div
        className='container mx-auto grid grid-cols-4
     place-items-center gap-y-6 lg:grid-cols-8'
      >
        <Logo logo={logo1} />
        <Logo logo={logo2} />
        <Logo logo={logo4} />
        <Logo logo={logo3} />
        <Logo logo={logo5} />
        <Logo logo={logo6} />
        <Logo logo={logo7} />
        <Logo logo={logo8} />
      </div>
    </section>
  );
};
export default CompaniesLogos;
