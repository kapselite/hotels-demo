import Hero from '../components/Hero';
import BookingBar from '../components/BookingBar';
import Experience from '../components/Experience';
import Suites from '../components/Suites';
import Amenities from '../components/Amenities';
import VirtualTour from '../components/VirtualTour';

export default function Home() {
  return (
    <div className="relative">
      <div className="relative">
        <Hero />
        <BookingBar />
      </div>
      <Experience />
      <Suites />
      <Amenities />
      <VirtualTour />
    </div>
  );
}
