import { useState } from 'react';
import { IconBoxMultiple } from '@tabler/icons-react';

import { Nav } from './components/Nav';
import { Page } from './components/Page';
import { Footer } from './components/Footer';
import './styles/app.scss';

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setIsNavOpen((pre) => !pre);

		setTimeout(() => {
			scrollTo(event);
		}, 1000);
	}

	function scrollTo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const target = event.target as HTMLButtonElement;
		const id = target.dataset.id;
		if (!id) return;

		const ele = document.getElementById(id) as HTMLDivElement;
		ele.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<main>
			{isNavOpen && (
				<div className='back-button'>
					<div>
						<button onClick={handleClick}>
							<IconBoxMultiple size={32} />
						</button>
						<span>Ivirx_</span>
					</div>
				</div>
			)}
			<Nav handleClick={handleClick} isNavOpen={isNavOpen} />
			<section className={`page ${isNavOpen ? 'show' : ''}`}>
				<section className='page-content'>
					<Page />
				</section>
				<Footer handleClick={scrollTo} />
			</section>
		</main>
	);
}

export default App;
