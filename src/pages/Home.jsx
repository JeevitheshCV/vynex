import HeroBanner from '../components/HeroBanner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Products from '../components/Products';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutUs />
      <Services />
      <Products />
    </div>
  );
}
