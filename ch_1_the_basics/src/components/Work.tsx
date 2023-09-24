export const Work = () => {
	return (
		<section id='work'>
			<h2 className='heading'>
				<span>My Work</span>
			</h2>
			<p className='para'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur
				ipsa in debitis ab et nam omnis sunt blanditiis hic incidunt, praesentium
				possimus deleniti impedit laudantium officia voluptatum ducimus dicta.
			</p>
			<div className='sites'>
				<div>
					<div className='image'>
						<img src='/dark-theme-minimal-site.png' alt='site' />
					</div>
					<span>Web Design</span>
					<span>Dark Theme Minimal Site</span>
				</div>
				<div>
					<div className='image'>
						<img src='/light-theme-minimal-site.png' alt='site' />
					</div>
					<span>Web Design</span>
					<span>Light Theme Minimal Site</span>
				</div>
				<div>
					<div className='image'>
						<img src='/using-bootstrap.png' alt='site' />
					</div>
					<span>Web Design</span>
					<span>BootCamp Landing Page</span>
				</div>
			</div>
		</section>
	);
};
