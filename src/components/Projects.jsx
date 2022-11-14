const Projects = () => {
	return (
		<>
			<section className="portfolio" id="portfolio">
				<div className="main-text">
					<p>Portfolio</p>
					<h2><span>Latest</span> Projects</h2>
				</div>
				<div className="portfolio-content">
					<div className="row">
						<img src="img/rhuma.jpg" height="400" alt=""/>
							<div className="layer">
								<h5>Rhuma Kids</h5>
								<p>Mobile application for diagnostic and assistance in the management of patients with spondyloarthritis
									for the benefit of the Kassab Manouba institute Tunis, Tunisia.</p>
								<a href="https://github.com/omar-chaabouni/diagnostique-rhumatologie" target="_blank" rel="noopener noreferrer"><i
									className='bx bx-link-external'></i></a>
							</div>
					</div>
					<div className="row">
						<img src="img/cows.png" height="400" alt=""/>
							<div className="layer">
								<h5>Cows & Bulls</h5>
								<p>A reflexion game that I made individually with Flutter and Firebase. Available on Play store via this
									link : This game was made for my own educational purposes. I wanted to do a project so I can put my
									knowladge into test and use. But thankfully it turned out to be a great game.</p>
								<a href="https://github.com/omar-chaabouni/cows-and-bulls" target="_blank" rel="noopener noreferrer"><i
									className='bx bx-link-external'></i></a>
							</div>
					</div>
				</div>
			</section>
			<div className="main-text">
				<h2><span>Latest</span> Achievements</h2>
			</div>
			<section className="portfolio">
				<div className="portfolio-content">
					<div className="row">
						<img src="img/eysey.jpg" alt=""/>
							<div className="layer">
								<h5>Eyesy</h5>
								<p>Smart hat to help visually impaired people navigate their path.
									Project winner of the first edition of Makeathon inter ODC Clubs organized jointly by Orange Tunisie
									and GIZ Tunisie.</p>
								<a href="https://github.com/omar-chaabouni/eyesy" target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
							</div>
					</div>
					<div className="row">
						<img src={"../Assets/covid.jpg"} height="380" alt=""/>
							<div className="layer">
								<h5>Rendez-vous-vaccin</h5>
								<p>Project in the crisis management theme: result of participation in ENSI's TuniHack 6.0 hackaton.
									Second place winning project.
									This project idea was adopted by the Tunisian government which is a great honor to us.</p>
								<a href="https://github.com/omar-chaabouni/Rendez-vous-vaccin" target="_blank" rel="noopener noreferrer"><i
									className='bx bx-link-external'></i></a>
							</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;