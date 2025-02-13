import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CreateSection from "./components/CreateSection";
import ContactSection from "./components/ContactSection";
import SharedBackground from "./components/SharedBackground";

function App() {
  return (
    <main>
      <HeroSection />
      <SharedBackground>
        <FeaturesSection />
        <CreateSection />
        <ContactSection />
      </SharedBackground>
    </main>
  );
}

export default App;
