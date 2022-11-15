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
					<h4>If You Have Any Project In Your Mind or You're Looking For Collaboration</h4>
					<p>I'm an IT Engineer - creating and developing solutions and acheiving diverse projects for companies all
						across the world.</p>
					<div className="list">
						<li><a href="tel:+21650953246">+216 50953246</a></li>
						<li><a href="mailto:ahmed.sahnoun.124@gmail.com">ahmed.sahnoun.124@gmail.com</a></li>
					</div>
		
					<div className="contact-icons">
						<a href="https://github.com/omar-chaabouni" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
						<a href="https://www.linkedin.com/in/omar-chaabouni/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
						<a href="https://medium.com/@omar.chaabouni.11" target="_blank" rel="noopener noreferrer"><i className='bx bxl-medium'></i></a>
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
						<input type="name" placeholder="Your Name" required/>
						<input type="email" placeholder="Your Email Address" required/>
						<input type="" placeholder="Your Mobile Number" required/>
						<textarea name="" id="" cols="35" rows="10" placeholder="How Can I Help You" required></textarea>
						<input type="submit" value="Send Message" className="submit" required/>
					</form>
				</div>
			</motion.div>
		</section>
	);
}

export default Contact;