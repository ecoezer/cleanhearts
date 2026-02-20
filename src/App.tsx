import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
