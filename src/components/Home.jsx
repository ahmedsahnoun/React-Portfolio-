const Home = () => {
	return (
		<section class="home" id="home">
			<div class="home-text">
				<div class="slide">
					<span class="one">Hello</span>
					<span class="two">I'm</span>
				</div>
				<h1>Omar CHAABOUNI</h1>
				<h3>IT<span> Engineer.</span></h3>
				<h4>AWS Cloud Certified Architect</h4>
				<p>I am a full-stack mobile and web developer. I am also an AWS Cloud artichect. Making IoT solutions is my passion.<br/> Coming from a Computer Networks and Telecommunications background, I believe that I am unstoppable.</p>
				<div class="button">
					<a href="#contact" class="btn">Say Hello</a>  &nbsp;  &nbsp;
					<a href="cv" download="cv/CV_Omar_CHAABOUNI_ENG.pdf" class="btn"><span><i class="bx bx-download" style={{color: 'white'}}></i></span>&nbsp; Download my CV</a> &nbsp;  &nbsp;
					<a href="https://github.com/omar-chaabouni" rel='INSAT' class="btn"><span><i class="bx bxl-github bx-xs" style={{color: 'white'}}></i></span>&nbsp; Check My Work</a>
				</div>
			</div>
		</section>
	);
}

export default Home;