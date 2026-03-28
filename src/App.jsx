import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Enquiry from './components/Enquiry';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;