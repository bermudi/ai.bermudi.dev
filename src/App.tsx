import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FutureSection from "./components/FutureSection";
import ContactSection from "./components/ContactSection";
import SharedBackground from "./components/SharedBackground";

function App() {
  return (
    <main>
      <HeroSection />
      <SharedBackground>
        <FeaturesSection />
        <FutureSection />
        <ContactSection />
      </SharedBackground>
    </main>
  );
}

export default App;
