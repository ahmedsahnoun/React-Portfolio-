// import vid from "../Assets/Lines - 5224.mp4"
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
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -300 }
				}}
			>
				<section className="home" id="home">
					{/* <video autoPlay muted loop id="background-video">
					<source src={vid} type="video/mp4" />
				</video> */}
					<div class="home-text">
						<div class="slide">
							<span class="one">Hello</span>
							<span class="two">I am</span>
						</div>
						<h1>Yassine</h1>
						<h3 class="current-status">M</h3>
						<p class="my-description">
							Very passionate about software development.<br />
							Even though I started my studies as an industrial engineer,<br />
							I managed to build up my skills in software development<br />
							and here I am now as a versatile engineer.
						</p>
						<div class="button">
							<a href="./resume/Med_Yassine_Resume.pdf" download class="btn">
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