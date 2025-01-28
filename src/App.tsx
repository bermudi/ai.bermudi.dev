import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FutureSection from "./components/FutureSection";
import ContactSection from "./components/ContactSection";
import SharedBackground from "./components/SharedBackground";

function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <div className="relative">
        <SharedBackground />
        <div className="text-white">
          <FeaturesSection />
          <FutureSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

export default App;
