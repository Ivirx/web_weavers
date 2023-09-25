import { useState } from 'react';

export function Nav({
	handleClick,
	isNavOpen,
}: {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isNavOpen: boolean;
}) {
	const [index, setIndex] = useState(0);

	function handleMouseover(indexNum: number) {
		setIndex(parseInt(indexNum.toString()));
	}

	return (
		<section className={`nav ${!isNavOpen ? 'show' : ''}`}>
			<section className='links-wrapper'>
				<div className='links'>
					<button
						data-id='hero'
						onClick={handleClick}
						onMouseOver={() => handleMouseover(0)}
					>
						Home
					</button>
					<button
						data-id='skills'
						onClick={handleClick}
						onMouseOver={() => handleMouseover(1)}
					>
						Skills
					</button>
					<button
						data-id='work'
						onClick={handleClick}
						onMouseOver={() => handleMouseover(2)}
					>
						Projects
					</button>
					<button
						data-id='contact'
						onClick={handleClick}
						onMouseOver={() => handleMouseover(3)}
					>
						Contact
					</button>
				</div>
				<section data-imageindex={index} className='backImage'></section>
			</section>
		</section>
	);
}
