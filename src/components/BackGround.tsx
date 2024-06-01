import Welcome from '/assets/welcome.jpg'
const BackGround = () => {
	return (
		<div className="overflow-hidden">
			<div className="absolute w-full top-[18%] min-[450px]:top-[10%] min-[530px]:top-[5%] sm:top-[-5%] md:top-[-20%] lg:top-[-38%] xl:top-[-70%] left-0 z-[-1]">
				<img className="fixed hero-background-image object-cover" src={Welcome} alt="Fondo" />
			</div>
		</div>
	)
}

export default BackGround
