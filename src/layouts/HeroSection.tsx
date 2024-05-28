import Navigation from '@/components/navigations/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const HeroSectionPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="container mx-auto text-center py-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem netus
          lacinia convallis nisl, <br /> metus. Cras dui, amet urna feugiat.
          Risus ut adipiscing enim{' '}
        </p>
      </div>
      <AboutSection />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default HeroSectionPage;
