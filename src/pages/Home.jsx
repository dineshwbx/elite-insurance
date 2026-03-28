import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About'; 
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import OtherServices from '../components/OtherServices';
import FeatureCard from '../components/FeatureCard';

const Home = () => (
  <div className="bg-slate-50 min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <About /> 
      <Services />
      <OtherServices />
      <FeatureCard />
      <WhyChooseUs />
      <Process />
    </main>
    <Footer />
  </div>
);

export default Home;