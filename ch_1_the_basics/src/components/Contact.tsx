export const Contact = () => {
	return (
		<section id='contact'>
			<h2 className='heading'>
				<span>Lets Work Together</span>
			</h2>
			<p className='para'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sunt assumenda
				culpa laboriosam numquam! Autem nemo suscipit et odit iure vitae animi
				excepturi ipsum illo, quibusdam dolorum, placeat ducimus sed.
			</p>
			<div className='form'>
				<form>
					<div className='form-group'>
						<input
							type='email'
							placeholder='Enter your email'
							autoComplete='off'
						/>
						<button type='submit'>Send</button>
					</div>
				</form>
			</div>
		</section>
	);
};
