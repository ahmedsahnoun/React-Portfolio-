const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home-text">
				<div className="slide">
					<span className="one">Hello</span>
					<span className="two">I'm</span>
				</div>
				<h1>Omar CHAABOUNI</h1>
				<h3>IT<span> Engineer.</span></h3>
				<h4>AWS Cloud Certified Architect</h4>
				<p>I am a full-stack mobile and web developer. I am also an AWS Cloud artichect. Making IoT solutions is my passion.<br/> Coming from a Computer Networks and Telecommunications background, I believe that I am unstoppable.</p>
				<div className="button">
					<a href="#contact" className="btn">Say Hello</a>  &nbsp;  &nbsp;
					<a href="cv" download="cv/CV_Omar_CHAABOUNI_ENG.pdf" className="btn"><span><i className="bx bx-download" style={{color: 'white'}}></i></span>&nbsp; Download my CV</a> &nbsp;  &nbsp;
					<a href="https://github.com/omar-chaabouni" target="_blank" rel="noopener noreferrer" className="btn" ><span><i className="bx bxl-github bx-xs" style={{color: 'white'}}></i></span>&nbsp; Check My Work</a>
				</div>
			</div>
		</section>
	);
}

export default Home;