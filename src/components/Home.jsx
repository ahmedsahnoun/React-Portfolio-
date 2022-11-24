import { motion } from "framer-motion"
import Resume from "../Assets/Resume.pdf"

const reveal = (letter, index, col, delay) => {
	return (
		<motion.span
			style={{ color: col }}
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
					<h1>Ahmed SAHNOUN</h1>
					<h3 className="current-status"> {"Computer Science".split("").map((letter, index) => reveal(letter, index, "white", 0.2))}
						<br />
						<span>{"Engineer".split("").map((letter, index) => reveal(letter, index, null, 1.6))}</span>
					</h3>
					<div className="button">
						<a href={Resume}
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							View Resume
						</a>
					</div>
				</div>
			</section>
		</motion.div>
	);
}

export default Home;