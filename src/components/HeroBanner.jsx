import { useEffect, useRef } from 'react';
import { rotateGlobe } from '../animations/globeAnimation';
import Button from './Button';
import './HeroBanner.css';

export default function HeroBanner() {
  const globeRef = useRef(null);

  useEffect(() => {
    rotateGlobe(globeRef.current);
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Connecting Markets Globally</h1>
        <p>Your trusted partner in international trade & export</p>
        <div className="hero-buttons">
          <Button onClick={() => (window.location.href = '/products')}>
            Explore Our Markets
          </Button>
          <Button onClick={() => (window.location.href = '/contact')}>
            Contact Us Today
          </Button>
        </div>
      </div>
      <div className="globe-container">
        <div className="globe" ref={globeRef}></div>
      </div>
    </section>
  );
}
