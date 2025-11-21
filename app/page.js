import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import PropertyCard from '../components/PropertyCard';
import PropertySlider from '../components/PropertySlider';
import ServiceCard from '../components/ServiceCard';
import BottomHeroSection from '../components/BottomHeroSection';
import AgentSlider from '../components/AgentSlider';
import ContactBanner from '../components/ContactBanner';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import Partners from '../components/Partners';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutSection />
      <PropertyCard />
      <PropertySlider/>
      <ServiceCard/>
      <BottomHeroSection/>
      <AgentSlider/>
      <ContactBanner/>
      <Testimonials/>
      <BlogSection/>
      <Partners/>
      <Footer/>
      
    </>
  );
}
