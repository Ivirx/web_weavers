import { useState } from 'react';
import { IconBoxMultiple } from '@tabler/icons-react';

import { Nav } from './components/Nav';
import { Page } from './components/Page';
import './styles/app.scss';

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setIsNavOpen((pre) => !pre);

		const target = event.target as HTMLButtonElement;
		const id = target.dataset.id;
		console.log(id);

		setTimeout(() => {
			if (!id) return;

			const ele = document.getElementById(id) as HTMLDivElement;
			ele.scrollIntoView({ behavior: 'smooth' });
		}, 1000);
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
			<Page isNavOpen={isNavOpen} />
		</main>
	);
}

export default App;
