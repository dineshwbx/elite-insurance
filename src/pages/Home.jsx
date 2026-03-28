import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About'; 
import Services from '../components/Services';
import Process from '../components/Process';
import InsuranceLandingPage from '../components/InsuranceLandingPage';

const Home = () => (
  <div className="bg-slate-50 min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <About /> 
      <Services />
      <InsuranceLandingPage />
      <Process />
    </main>
    <Footer />
  </div>
);

export default Home;