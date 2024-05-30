import React from 'react'

interface LoaderProps {
	size?: string
}

const Loader: React.FC<LoaderProps> = ({ size = '2rem' }) => {
	return (
		<div className="relative">
			{' '}
			<style>
				{`
                .loader {
                display: flex;
                transition: all 0.4s;
                }

                .loader div {
                margin-left: 0.8rem;
                background-color: transparent;
                box-shadow: 0px 2px 2px black;
                border-radius: 3em;
                height: calc(${size} / 2);
                width: ${size};
                }

                .box-load1 {
                animation: brighten 1.5s infinite;
                }

                .box-load2 {
                animation: brighten 1.5s infinite;
                animation-delay: .3s;
                }

                .box-load3 {
                animation: brighten 1.5s infinite;
                animation-delay: .6s;
                }

                @keyframes brighten {
                100% {
                        background-color: #8979B3;
                    box-shadow: none;
                }
                }

                `}
			</style>
			<div className="loader flex justify-center items-center w-screen h-screen">
				<div className="box-load1"></div>
				<div className="box-load2"></div>
				<div className="box-load3"></div>
			</div>
		</div>
	)
}

export default Loader
