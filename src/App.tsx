import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Impressum from './pages/Impressum';

function App() {
  return (
    <>
      <ScrollToTopOnNavigation />
      <ThemeSwitcher />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
