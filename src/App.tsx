import { Suspense } from 'react'
import { lazy } from 'react'

const HeroSection = lazy(() => import('./components/HeroSection'))
const Navbar = lazy(() => import('./components/Navbar'))
import './app.css'
import Loader from './components/Loader'
const Introduction = lazy(() => import('./components/Introduction'))
const Separator = lazy(() => import('./components/Separator'))
const ImageTextSection = lazy(() => import('./components/ImageTextSection'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))
const Phrase = lazy(() => import('./components/Phrase'))
const BackGround = lazy(() => import('./components/BackGround'))
// const Goals = lazy(() => import("./components/Goals"));

import p1 from '/assets/p1/img1.jpeg';
import p2 from '/assets/p1/img2.jpeg';
import p3 from '/assets/p1/img3.jpeg';
import p4 from '/assets/p1/img4.jpeg';
import p5 from '/assets/p1/img5.jpeg';
import p6 from '/assets/p1/img6.jpeg';
import p7 from '/assets/p1/img7.jpeg';
import p8 from '/assets/p1/img8.jpeg';
import p9 from '/assets/p1/img9.jpeg';
import p10 from '/assets/p2/img1.png';
import p11 from '/assets/p2/img2.jpeg';
import p12 from '/assets/p3/img1.jpeg';
import p13 from '/assets/p3/img2.jpeg';
import p14 from '/assets/p3/img3.jpeg';
import p15 from '/assets/p3/img4.jpeg';
import p16 from '/assets/p3/img5.jpeg';
import p17 from '/assets/p3/img6.jpeg';
import p18 from '/assets/p3/img7.jpeg';
import p19 from '/assets/p2/img3.jpeg';
import p20 from '/assets/p2/img4.jpeg';
import p21 from '/assets/p4/img3.jpeg';
import p22 from '/assets/p4/img4.jpeg';
import p28 from '/assets/p4/img5.jpeg';
import p23 from '/assets/musicales/img1-m1.jpeg';
import p24 from '/assets/musicales/img2-m1.jpeg';
import p25 from '/assets/musicales/img1-m2.jpeg';
import p26 from '/assets/musicales/img2-m2.jpeg';
import p27  from '/assets/musicales/img3-m2.jpeg';



const images1 = [p9, p1, p2, p3, p4, p5, p6, p7, p8];
const images2 = [p10, p11, p19, p20,];
const images3 = [p12, p13, p14, p15, p16, p17, p18];
const images4 = [p21, p22, p28];
const images5 = [p23, p24];
const images6 = [p26, p27, p25];


function App() {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<BackGround />
				<HeroSection />
				<Introduction />

				<ImageTextSection
					id="about-me"
					imageUrl="/assets/image-4.jpg"
					title="Algo sobre mí"
					subtitle="Experiencia en Coordinación de Producción"
					paragraph="Experiencia en Coordinación de Producción"
					bgColor="bg-white"
					imagePosition="left"
				/>
				<Separator backgroundImage="/assets/image-1.jpg" height="h-[150px]" className="md:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-3.jpg"
					title="Algo más..."
					subtitle="Experiencia en Dirección de Casting"
					paragraph="Experiencia en Dirección de Casting"
					bgColor="bg-secondary"
					imagePosition="right"
				/>
				<Separator backgroundImage="/assets/image-2.jpg" className="md:hidden" />
				<ImageTextSection
					id="about-me"
					imageUrl="/assets/image-2.jpg"
					title="...y algo más."
					subtitle="Experiencia en dirección de Cortometrajes"
					paragraph="Dirección de Cortometrajes"
					bgColor="bg-tertiary"
					imagePosition="left"
				/>


				<Separator title="PELÍCULAS" paragraph="EXPERIENCIA PROFESIONAL" />
				<ImageTextSection
					id="movies"
					imageUrl={images3}
					title="El olor de las nubes"
					subtitle="Coordinadora de casting"
					paragraph="El olor de las nubes"
					bgColor="bg-secondary"
					imagePosition="left"
				/>
				<Separator height="h-[150px]" className="md:hidden" />
				<ImageTextSection
					imageUrl={images1}
					title="Dembow"
					subtitle="Asistente de casting"
					paragraph="Dembow"
					bgColor="bg-white"
					imagePosition="right"
				/>
				<Separator height="h-[150px]" className="md:hidden" />
				<ImageTextSection
					imageUrl={images4}
					title="Entre la arena y la santísima cruz"
					subtitle="Coordinadora de producción"
					paragraph="Entre la arena y la santísima cruz"
					bgColor="bg-secondary"
					imagePosition="left"
				/>



				<Separator title="VIDEOS MUSICALES" paragraph="EXPERIENCIA PROFESIONAL" />
				<ImageTextSection
					imageUrl={images5}
					title="Las de Juan Luis Guerra"
					subtitle="Asistente de vestuario"
					paragraph="Las de Juan Luis Guerra"
					bgColor="bg-secondary"
					imagePosition="left"
				/>
				<Separator height="h-[150px]" className="md:hidden" />
				<ImageTextSection
					imageUrl={images6}
					title="La última vez"
					subtitle="Asistente de casting"
					paragraph="La última vez"
					bgColor="bg-white"
					imagePosition="right"
				/>
				
				
				<Separator title="CONCIERTOS" paragraph="EXPERIENCIA PROFESIONAL" />
				<ImageTextSection
					imageUrl={images2}
					title="Fin de la historia, el concierto"
					subtitle="Soporte de producción"
					paragraph="Fin de la historia"
					bgColor="bg-white"
					imagePosition="left"
				/>
				


				<Separator title="PROYECTOS DESTACADOS" paragraph="Competencias profesionales" />
				<Projects />
				<ImageTextSection
					id="more-about-me"
					imageUrl="/assets/image-4.jpg"
					title="Algo sobre mí"
					subtitle="Experiencia en Maquillaje y Vestuario"
					paragraph="Experiencia en Maquillaje y Vestuario"
					bgColor="bg-white"
					imagePosition="right"
				/>
				<Separator backgroundImage="/assets/image-5.jpg" height="h-[150px]" className="md:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-2.jpg"
					title="Algo más..."
					subtitle="Experiencia en Interpretación y Actuación"
					paragraph="Interpretación y Actuación"
					bgColor="bg-tertiary"
					imagePosition="left"
				/>
				<Separator backgroundImage="/assets/image-3.jpg" className="md:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-5.jpg"
					title="...y algo más."
					subtitle="Filosofía y Pasión"
					paragraph="Filosofía y Pasión"
					bgColor="bg-secondary"
					imagePosition="right"
				/>
				{/* <Separator
          title="MIS HABILIDADES"
          paragraph="Competencias personales"
        /> */}
				{/* <Goals/> */}
				<Phrase />
				<Footer />
			</Suspense>
		</div>
	)
}

export default App
