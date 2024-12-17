import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recent from "./components/Recent";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Recent />
      <Featured/>
      <Footer />
    </div>
  );
}
