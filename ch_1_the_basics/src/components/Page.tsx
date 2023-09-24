import { Hero } from './Hero';
import { Skills } from './Skills';
import { WhatIDo } from './WhatIDo';
import { Work } from './Work';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Page = ({ isNavOpen }: { isNavOpen: boolean }) => {
	return (
		<section className={`page ${isNavOpen ? 'show' : ''}`}>
			<section className='page-content'>
				<Hero />
				<Skills />
				<WhatIDo />
				<Work />
				<Contact />
			</section>
			<Footer />
		</section>
	);
};
