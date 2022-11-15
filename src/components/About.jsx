import pic from "../Assets/omar.jpg"

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about-img">
				<img src={pic} alt="" />
			</div>
			<div className="about-text">
				<h2>About <span>Me</span></h2>
				<h4>CS Engineer - FullStack Developer</h4>
				<p>I am a Computer Networks and Telecommunications Engineer specialized in Cloud Platforms and IoT graduated from <a href="http://www.insat.rnu.tn/Fr/accueil_46_34"><span>the National Institute of Applied Science and Technology (INSAT) in Tunis, Tunisia.</span></a></p>
				<p>I am trying to find my way towards success.<br /> I am a full-stack developer, an IoT engineer and a Cloud enthusiast. I bascically can do anything. I am very autonomous and always looking for new challenges.</p>
				<a href="Home" className="btn">More About</a>
			</div>
		</section>
	);
}

export default About;