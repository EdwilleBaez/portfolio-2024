import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'

const goals: { title: string; description: string; badges: string[] }[] = [
	{
		title: 'Mas detalles de la vez...',
		description: 'Descripción de la meta 1',
		badges: ['Badge 1', 'Badge 2']
	},
	{
		title: 'Mas detalles de la vez...',
		description: 'Descripción de la meta 2',
		badges: ['Badge 3', 'Badge 4']
	},
	{
		title: 'Mas detalles de la vez...',
		description: 'Descripción de la meta 3',
		badges: ['Badge 5', 'Badge 6']
	}
]

const Goals = () => {
	const [selectedGoal, setSelectedGoal] = useState<{ title: string; description: string; badges: string[] } | null>(null)
	const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);


	const openModal = (goal: { title: string; description: string; badges: string[] }) => {
		setSelectedGoal(goal)
		setScrollEnabled(false);
	}

	const closeModal = () => {
		setSelectedGoal(null)
		setScrollEnabled(true); 

	}

	useEffect(() => {
        if (!scrollEnabled) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [scrollEnabled]);


	return (
		<div>
			<section id="goals" className="flex justify-center items-center h-screen text-center md:text-left bg-gray-100">
				<img className="hidden md:flex md:w-1/2 md:h-3/4 m-16" src={`/assets/image-1.jpg`} alt="Imagen" />
				<div className="w-1/2">
					<h2 className="text-xl mb-4">Triunfos personales</h2>
					{goals.map((goal, index) => (
						<div key={index} className="mb-4">
							<button
								className="text-tertiary hover:text-tertiary-dark hover:underline cursor-pointer text-lg mb-2"
								onClick={() => openModal(goal)}
							>
								{goal.title}
							</button>
						</div>
					))}
				</div>
			</section>
			{selectedGoal && (
				<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center text-center">
					<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={closeModal}></div>
					<div className="bg-white p-6 rounded-lg relative">
						<div className="absolute top-0 right-0 p-4">
							<MdClose className="text-gray-500 cursor-pointer text-2xl" onClick={closeModal} />{' '}
						</div>
						<h2 className="text-xl m-6">{selectedGoal.title}</h2>
						<p className="text-base">{selectedGoal.description}</p>
						<div className="flex flex-wrap justify-center gap-3 text-center mt-5 text-[12px]">
							{selectedGoal.badges.map((badge, index) => (
								<span
									key={index}
									className="border border-secondary text-secondary px-4 py-2 rounded text-sm"
								>
									{badge}
								</span>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Goals
