import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./app.css";
import Introduction from "./components/Introduction";
import Separator from "./components/Separator";
import ImageTextSection from "./components/ImageTextSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Phrase from "./components/Phrase";
import BackGround from "./components/BackGround";

function App() {
  return (
    <>
      <Navbar />
      <BackGround/>
      <HeroSection />
      <Introduction />
      <ImageTextSection
        imageUrl="../src/assets/image-1.jpg"
        title="Título"
        subtitle="Subtítulo"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        bgColor="bg-gray-100"
        imagePosition="left"
      />
      <ImageTextSection
        imageUrl="../src/assets/image-2.jpg"
        title="Título"
        subtitle="Subtítulo"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        bgColor="bg-secondary"
        imagePosition="right"
      />
      <Separator
        title="MIS PROYECTOS"
        paragraph="Competencias profesionales"
      />
      <Projects/>
      <Separator
        title="MIS HABILIDADES"
        paragraph="Competencias profesionales"
      />
      <Phrase/>
      <Footer/>
    </>
  );
}

export default App;
