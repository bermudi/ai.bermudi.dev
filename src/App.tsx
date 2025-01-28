import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FutureSection from "./components/FutureSection";
import ContactSection from "./components/ContactSection";
import SharedBackground from "./components/SharedBackground";

function App() {
  return (
    <main className="bg-black text-white relative">
      <HeroSection />
      <div className="relative">
        <SharedBackground />
        <FeaturesSection />
        <FutureSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
