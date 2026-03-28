import Hero from '../components/Hero';
import About from '../components/About'; 
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import OtherServices from '../components/OtherServices';
import FeatureCard from '../components/FeatureCard';

const Home = () => (
  <div className="bg-slate-50">
    <main>
      <Hero />
      <About /> 
      <Services />
      <OtherServices />
      <FeatureCard />
      <WhyChooseUs />
      <Process />
    </main>
  </div>
);

export default Home;