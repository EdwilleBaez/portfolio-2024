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

import p1 from '../public/assets/p1/img1.jpeg';
import p2 from '../public/assets/p1/img2.jpeg';
import p3 from '../public/assets/p1/img3.jpeg';
import p4 from '../public/assets/p1/img4.jpeg';
import p5 from '../public/assets/p1/img5.jpeg';
import p6 from '../public/assets/p1/img6.jpeg';
import p7 from '../public/assets/p1/img7.jpeg';
import p8 from '../public/assets/p1/img8.jpeg';
import p9 from '../public/assets/p1/img9.jpeg';
import p10 from '../public/assets/p2/img1.jpeg';
import p11 from '../public/assets/p2/img2.jpeg';
import p12 from '../public/assets/p3/img1.jpeg';
import p13 from '../public/assets/p3/img2.jpeg';
import p14 from '../public/assets/p3/img3.jpeg';
import p15 from '../public/assets/p3/img4.jpeg';
import p16 from '../public/assets/p3/img5.jpeg';
import p17 from '../public/assets/p3/img6.jpeg';
import p18 from '../public/assets/p3/img7.jpeg';
import p19 from '../public/assets/p4/img1.jpeg';
import p20 from '../public/assets/p4/img2.jpeg';
import p21 from '../public/assets/p4/img3.jpeg';
import p22 from '../public/assets/p4/img4.jpeg';
import p28 from '../public/assets/p4/img5.jpeg';
import p23 from '../public/assets/musicales/img2-m1.jpeg';
import p24 from '../public/assets/musicales/img2-m1.jpeg';
import p25 from '../public/assets/musicales/img1-m2.jpeg';
import p26 from '../public/assets/musicales/img2-m2.jpeg';
import p27  from '../public/assets/musicales/img3-m2.jpeg';



const images1 = [p9, p1, p2, p3, p4, p5, p6, p7, p8];
const images2 = [p10, p11];
const images3 = [p12, p13, p14, p15, p16, p17, p18];
const images4 = [p19, p20, p21, p22, p28];
const images5 = [p23, p24];
const images6 = [p25, p26, p27];


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
					imageUrl="/assets/image-2.jpg"
					title="Algo sobre mí"
					subtitle="Experiencia en Maquillaje y Vestuario"
					paragraphIndex={0}
					bgColor="bg-white"
					imagePosition="left"
				/>
				<Separator backgroundImage="/assets/image-1.jpg" className="sm:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-3.jpg"
					title="Algo más..."
					subtitle="Dirección de Cortometrajes"
					paragraphIndex={1}
					bgColor="bg-secondary"
					imagePosition="right"
				/>


				<Separator title="PELÍCULAS" paragraph="EXPERIENCIA PROFESIONAL" />
				<ImageTextSection
					id="movies"
					imageUrl={images3}
					title="El olor de las nubes"
					subtitle="Coordinadora de casting"
					paragraphIndex={6}
					bgColor="bg-secondary"
					imagePosition="left"
				/>
				<ImageTextSection
					id="more-about-me"
					imageUrl={images1}
					title="Dembow"
					subtitle="Asistente de casting"
					paragraphIndex={5}
					bgColor="bg-white"
					imagePosition="right"
				/>
				<ImageTextSection
					id="more-about-me"
					imageUrl={images4}
					title="Entre la arena y la santísima cruz"
					subtitle="Coordinadora de producción"
					paragraphIndex={7}
					bgColor="bg-secondary"
					imagePosition="left"
				/>



				<Separator title="VIDEOS MUSICALES" paragraph="EXPERIENCIA PROFESIONAL" />
				<ImageTextSection
					id="more-about-me"
					imageUrl={images5}
					title="Las de Juan Luis Guerra"
					subtitle="Asistente de vestuario"
					paragraphIndex={5}
					bgColor="bg-secondary"
					imagePosition="left"
				/>
				<ImageTextSection
					id="more-about-me"
					imageUrl={images6}
					title="La última vez"
					subtitle="Asistente de casting"
					paragraphIndex={4}
					bgColor="bg-white"
					imagePosition="right"
				/>
				
				

				<ImageTextSection
					id="more-about-me"
					imageUrl={images2}
					title="Fin de la historia, el concierto"
					subtitle="Soporte de producción"
					paragraphIndex={4}
					bgColor="bg-white"
					imagePosition="right"
				/>
				




				<Separator title="PROYECTOS DESTACADOS" paragraph="Competencias profesionales" />
				<Projects />
				<ImageTextSection
					id="more-about-me"
					imageUrl="/assets/image-4.jpg"
					title="Algo sobre mí"
					subtitle="Interpretación y Actuación"
					paragraphIndex={2}
					bgColor="bg-white"
					imagePosition="left"
				/>
				<Separator backgroundImage="/assets/image-3.jpg" className="sm:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-5.jpg"
					title="Algo más..."
					subtitle="Filosofía y Pasión"
					paragraphIndex={3}
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
