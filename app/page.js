import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformOverview from '../components/PlatformOverview';
import FeaturesGrid from '../components/FeaturesGrid';
import TechSpecs from '../components/TechSpecs';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-gray-100 selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Hero />
      <PlatformOverview />
      <FeaturesGrid />
      <TechSpecs />
      <DownloadSection />
      <Footer />
    </main>
  );
}
