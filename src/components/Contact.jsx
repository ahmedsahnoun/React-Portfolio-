import { motion } from "framer-motion"

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.3 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -100 }
				}}
			>
				<div className="contact-text">
					<h2>Contact <span>Me!</span></h2>
					<h4>
						If you a have project in mind and are looking to collaborate or if any of my skills interest you,<br/>
						feel free to reach out!
						</h4>
					<div className="list">
						<ul>
						<li><a href="tel:+21650953246">+216 50953246</a></li>
						<li><a href="mailto:ahmed.sahnoun.124@gmail.com">ahmed.sahnoun.124@gmail.com</a></li>
						</ul>
					</div>

					<div className="contact-icons">
						<a title ="Linkedin" href="https://www.linkedin.com/in/ahmed-sahnoun-9681b1222/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'> </i></a>
						<br/><br/>
						<a title ="GitHub" href="https://github.com/ahmedsahnoun" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.3 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: 100 }
				}}
			>
				<div id="contact" className="contact-form">
					<form action="https://formsubmit.co/ahmed.sahnoun.124@gmail.com" method="POST">
						<input name="name" placeholder="Your Name" required />
						<input name="email" placeholder="Your Email Address" required />
						<textarea name="details" id="details" cols="35" rows="10" placeholder="How Can I Help You" required></textarea>
						<input type="submit" value="Send Message" className="submit" required />
					</form>
				</div>
			</motion.div>
		</section>
	);
}

export default Contact;