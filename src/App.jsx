import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BentoGrid from './components/BentoGrid';
import WhyAlign from './components/WhyAlign';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleBookingOpen = (planName = '') => {
    setSelectedPlan(planName);
    setIsBookingOpen(true);
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
    setSelectedPlan('');
  };

  return (
    <div className="min-h-screen">
<Navbar onBookingOpen={handleBookingOpen} />      
      <div id="home">
<Hero onBookingOpen={handleBookingOpen} />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="classes">
        <BentoGrid />
        <WhyAlign />
      </div>
      
      <div id="pricing">
        <Pricing onBookingOpen={handleBookingOpen} />
      </div>
      
      <div id="contact">
        <Footer />
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleBookingClose}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

export default App;