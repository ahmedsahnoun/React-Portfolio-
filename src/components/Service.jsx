const Service = () => {
	return (
		<section className="services" id="services">
			<div className="main-text">
				<p>What I am Expert In</p>
				<h2><span>My</span> Skills</h2>
			</div>
			<div className="services-content">
				<div className="box">
					<div className="s-icons">
						<i className='bx bx-code-alt' ></i>
					</div>
					<h3>Mobile & Web Development</h3>
					<p>I've had the opportunity to work on several mobile and web projects in which I could strength my skills in backend and frontend. And I really enjoy working with Flutter.
					</p>
				</div>
				<div className="box">
					<div className="s-icons">
						<i className='bx bx-mobile-alt' ></i>
					</div>
					<h3>IoT</h3>
					<p>I am very passionate about IoT. Therefore, I have been improving my skills and trying to push myself for more. This is the domain I am keen on and where I enjoy myself. I have a Computer Networks and telecommunications background too which helps a lot.</p>
				</div>

				<div className="box">
					<div className="s-icons">
						<i className='bx bx-cloud' ></i>
					</div>
					<h3>AWS Cloud</h3>
					<p>The Cloud concept and its evolution facinate me. Now I obtained the AWS Cloud Practitioner certificate and the AWS Cloud architect associate certificate. And I can't get engough, I will be going for more...</p>
				</div>
			</div>
		</section>
	);
}

export default Service;