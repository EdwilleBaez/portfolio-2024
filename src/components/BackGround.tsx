import Welcome from '/assets/welcome.jpg';

const BackGround = () => {
	return (
		<div className="fixed z-[-1] top-20  md:top-14 left-0 right-0 h-screen overflow-hidden">
			<img
				className="absolute inset-0 w-full h-full object-cover object-[50%_50%] min-[575px]:object-[50%_70%] sm:object-[50%_25%]"
				src={Welcome}
				alt="Fondo"
			/>
		</div>
	);
}

export default BackGround;
