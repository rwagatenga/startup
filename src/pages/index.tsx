import Navigation from 'src/components/Navigation';
import HeroSection from 'src/components/HeroSection';
export default function Home() {
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

      <div className="min-h-screen"></div>
    </div>
  );
}
