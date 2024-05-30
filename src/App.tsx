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
					subtitle="Objetivo personal"
					paragraphIndex={0}
					bgColor="bg-white"
					imagePosition="left"
				/>
				<Separator backgroundImage="/assets/image-1.jpg" className="sm:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-3.jpg"
					title="Algo mas..."
					subtitle="Objetivo profesional"
					paragraphIndex={1}
					bgColor="bg-secondary"
					imagePosition="right"
				/>
				<Separator title="MIS PROYECTOS" paragraph="Competencias profesionales" />
				<Projects />
				<ImageTextSection
					id="more-about-me"
					imageUrl="/assets/image-4.jpg"
					title="Algo sobre mí"
					subtitle="Filosofia personal"
					paragraphIndex={2}
					bgColor="bg-white"
					imagePosition="left"
				/>
				<Separator backgroundImage="/assets/image-3.jpg" className="sm:hidden" />
				<ImageTextSection
					imageUrl="/assets/image-5.jpg"
					title="Algo mas..."
					subtitle="Filosofia profesional"
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
