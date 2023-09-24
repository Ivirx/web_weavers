import {
	IconBrandGithub,
	IconBrandHtml5,
	IconBrandCss3,
	IconBrandJavascript,
	IconBrandNodejs,
	IconBrandNextjs,
	IconBrandReact,
	IconBrandGit,
	IconBrandPython,
	IconBrandBootstrap,
	IconBrandTypescript,
	IconBrandRedux,
	IconBrandSass,
	IconBrandVite,
	IconBrandTailwind,
	IconBrandDjango,
	IconBrandFramerMotion,
	IconBrandMysql,
	IconSql,
	IconBrandMongodb,
} from '@tabler/icons-react';

export const Skills = () => {
	const size = 120;
	const skills = [
		{ name: 'MongoDB', component: IconBrandMongodb, size: size, color: '#47a248' },
		{ name: 'SQL', component: IconSql, size: size, color: '#4479a1' },
		{ name: 'MySQL', component: IconBrandMysql, size: size, color: '#4479a1' },
		{ name: 'Sass', component: IconBrandSass, size: size, color: '#cc6699' },
		{ name: 'Tailwind', component: IconBrandTailwind, size: size, color: '#06b6d4' },
		{ name: 'Vite', component: IconBrandVite, size: size, color: '#646cff' },
		{ name: 'HTML', component: IconBrandHtml5, size: size, color: '#e34c26' },
		{ name: 'CSS', component: IconBrandCss3, size: size, color: '#264de4' },
		{ name: 'JavaScript', component: IconBrandJavascript, size: size, color: '#f0db4f' },
		{ name: 'TypeScript', component: IconBrandTypescript, size: size, color: '#007acc' },
		{ name: 'React', component: IconBrandReact, size: size, color: '#61dbfb' },
		{ name: 'Redux', component: IconBrandRedux, size: size, color: '#764abc' },
		{ name: 'NextJS', component: IconBrandNextjs, size: size, color: '#000000' },
		{ name: 'NodeJS', component: IconBrandNodejs, size: size, color: '#339933' },
		{ name: 'Python', component: IconBrandPython, size: size, color: '#3776ab' },
		{ name: 'Django', component: IconBrandDjango, size: size, color: '#092e20' },
		{ name: 'Git', component: IconBrandGit, size: size, color: '#f05032' },
		{ name: 'Github', component: IconBrandGithub, size: size, color: '#000000' },
		{ name: 'Bootstrap', component: IconBrandBootstrap, size: size, color: '#7952b3' },
		{
			name: 'Framer Motion',
			component: IconBrandFramerMotion,
			size: size,
			color: '#0055ff',
		},
	];

	return (
		<section id='skills'>
			<h2 className='heading'>
				<span>My Skills</span>
			</h2>
			<p className='para'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia
				laudantium asperiores sapiente consectetur, eius sint, culpa dignissimos.
			</p>
			<div className='tray'>
				<div>
					{skills.map((skill) => {
						const Skill = skill.component;
						return (
							<div key={skill.name} className='skill'>
								<Skill size={size} color={skill.color} stroke={1.5} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
