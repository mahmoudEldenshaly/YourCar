import './App.css';
import About from './components/About/About';
import CarsGallery from './components/CarsGallery/CarsGallery';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonials/Testimonial';
import CompaniesLogos from './components/CompaniesLogos/CompaniesLogos';
import Footer from './components/Footer/Footer';
import CarsCarousel from './components/Cars/CarsCarousel';
import Cart from './components/Cart/Cart';
import ContextProvider from './components/Context/ContextProvider';

import { useState } from 'react';
import SlickCarousel from './SlickCarousel';

function App() {
  const [isShown, setIsShown] = useState(false);
  const showCart = () => {
    setIsShown(!isShown);
  };
  return (
    <ContextProvider>
      <Header onCartClick={showCart} />
      {isShown && <Cart isShown={isShown} />}
      <main>
        <About />
        <Services />
        <CarsCarousel />
        <CarsGallery />
        {/* <Testimonial /> */}
        <SlickCarousel />
        <CompaniesLogos />
      </main>
      <Footer />
    </ContextProvider>
  );
}

export default App;
