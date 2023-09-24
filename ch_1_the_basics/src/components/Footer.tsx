import { IconBrandGithub, IconBrandReddit } from '@tabler/icons-react';

export const Footer = () => {
	return (
		<footer>
			<section className='footer'>
				<h2>Ivirx_</h2>
				<div>
					<span>Home</span>
					<span>Skills</span>
					<span>Work</span>
					<span>Contact</span>
				</div>
				<div>
					<IconBrandGithub />
					<IconBrandReddit />
				</div>
			</section>
		</footer>
	);
};
