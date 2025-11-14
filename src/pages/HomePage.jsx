import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import FeaturedSection from "../components/FeaturedSection.jsx";

function HomePage() {
  return (
    <>
    <div className="min-h-screen .text-primary-dark-900">
      <Navbar />
      <div className="h-20"></div>
      <HeroSection />
      <FeaturedSection />
    </div>
    </>
  );
}

export default HomePage;