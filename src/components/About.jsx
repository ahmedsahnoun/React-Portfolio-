import pic from "../Assets/omar1.png"
import { motion } from "framer-motion"

const About = () => {
	return (
		<section className="about" id="about">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -100 }
				}}
			>
				<div className="about-img">
					<img src={pic} alt="" />
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: 100 }
				}}
			>
				<div className="about-text">
					<h2>About <span>Me</span></h2>
					<h4>CS Engineer - FullStack Developer</h4>
					<p>
						I am a simple tech enthusiast who found his calling as a software developer.<br/>
						
					</p>
				</div>
			</motion.div>
		</section>
	);
}

export default About;