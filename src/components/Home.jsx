import { motion } from "framer-motion"

const reveal = (letter, index, col, delay) => {
	return (
		<motion.span
			style={{color: col}}
			key={index}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.2, delay: delay + 0.08 * index }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: -40 }
			}}
		>
			{letter}
		</motion.span>
	)
}

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
				<section className="home" id="home"
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<div className="home-text">
						<div className="slide">
							<span className="one">Hello</span>
							<span className="two">I am</span>
						</div>
						<h1>{"Ahmed SAHNOUN".split("").map((letter, index) => reveal(letter, index, "white"))}</h1>
						<h3 className="current-status"> {"Computer Science".split("").map((letter, index) => reveal(letter, index, "white", 0.2))}
							<br />
							<span>{"Engineer".split("").map((letter, index) => reveal(letter, index, null ,1.6))}</span>
						</h3>
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