import { motion } from "framer-motion"

const Home = () => {
	return (
		<div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: -40 }
				}}
			>
				<section className="home" id="home">
					<div className="home-text">
						<div className="slide">
							<span className="one">Hello</span>
							<span className="two">I am</span>
						</div>
						<h1>Ahmed SAHNOUN</h1>
						<h3 className="current-status">CS <span>Engineer</span></h3>
						<p className="my-description">
							Very passionate about software development.<br />
							Even though I started my studies as an industrial engineer,<br />
							I managed to build up my skills in software development<br />
							and here I am now as a versatile engineer.
						</p>
						<div className="button">
							<a href="./resume/Med_Yassine_Resume.pdf" download className="btn">
								Download Resume
							</a>
						</div>
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default Home;