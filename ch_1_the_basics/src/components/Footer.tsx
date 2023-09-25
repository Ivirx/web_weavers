import { IconBrandGithub, IconBrandReddit } from '@tabler/icons-react';

export const Footer = ({
	handleClick,
}: {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
	return (
		<footer>
			<section className='footer'>
				<h2>Ivirx_</h2>
				<div>
					<span data-id='hero' onClick={handleClick}>
						Home
					</span>
					<span data-id='skills' onClick={handleClick}>
						Skills
					</span>
					<span data-id='work' onClick={handleClick}>
						Work
					</span>
					<span data-id='contact' onClick={handleClick}>
						Contact
					</span>
				</div>
				<div>
					<IconBrandGithub />
					<IconBrandReddit />
				</div>
			</section>
		</footer>
	);
};
