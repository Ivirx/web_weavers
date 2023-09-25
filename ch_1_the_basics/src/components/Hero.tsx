import { IconBrandGithub } from '@tabler/icons-react';

export const Hero = () => {
	return (
		<section id='hero'>
			<div className='left'>
				<div>
					<span>Hi, I am</span>
					<span>Vivek Kumar</span>
					<span>FullStack</span>
					<span>Developer</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia
					laudantium asperiores sapiente consectetur, eius sint, culpa dignissimos.
				</p>
				<div className='button'>
					<a href='https://github.com/Ivirx' target='_blank'>
						<span>Github</span>
						<IconBrandGithub />
					</a>
				</div>
			</div>
			<div className='right'>
				<img src='/profile.jpg' alt='image' />
			</div>
		</section>
	);
};
