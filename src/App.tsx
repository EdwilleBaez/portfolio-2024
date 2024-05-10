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
import Goals from "./components/Goals";

function App() {
  return (
    <div>
      <Navbar />
      <BackGround />
      <HeroSection />
      <Introduction />
      <ImageTextSection
        id="about-me"
        imageUrl="/assets/image-1.jpg"
        title="Algo sobre mí"
        subtitle="Objetivo personal"
        paragraphIndex={0}
        bgColor="bg-white"
        imagePosition="left"
      />
      <Separator backgroundImage="/assets/image-1.jpg" className="md:hidden"/>
      <ImageTextSection
        imageUrl="/assets/image-2.jpg"
        title="Algo mas..."
        subtitle="Objetivo profesional"
        paragraphIndex={1}
        bgColor="bg-secondary"
        imagePosition="right"
      />
      <Separator title="MIS PROYECTOS" paragraph="Competencias profesionales"/>
      <Projects />
      <ImageTextSection
        id="more-about-me"
        imageUrl="/assets/image-1.jpg"
        title="Algo sobre mí"
        subtitle="Filosofia personal"
        paragraphIndex={2}
        bgColor="bg-white"
        imagePosition="left"
      />
      <Separator backgroundImage="/assets/image-2.jpg" className="md:hidden"/>
      <ImageTextSection
        imageUrl="/assets/image-2.jpg"
        title="Algo mas..."
        subtitle="Filosofia profesional"
        paragraphIndex={3}
        bgColor="bg-secondary"
        imagePosition="right"
      />
      <Separator
        title="MIS HABILIDADES"
        paragraph="Competencias personales"
      />
      <Goals/>
      <Phrase />
      <Footer />
    </div>
  );
}

export default App;
