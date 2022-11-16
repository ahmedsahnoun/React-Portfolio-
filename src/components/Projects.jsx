import pic from "../Assets/portfolio1.jpg"
import { motion } from "framer-motion"

const project = (details, index) => {
	return (
		<motion.div
			key={index}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			variants={{
				visible: { opacity: 1, x: 0 },
				hidden: { opacity: 0, x: -70 }
			}}
		>
			<div className="row">
				<a
					style={{ color: "inherit" }}
					href={details.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={details.pic} alt="" />
					<div className="layer">
						<h5>{details.title}</h5>
						<p>{details.description}</p>
						<i className='bx bx-link-external'></i>
					</div>
				</a>
			</div>
		</motion.div>
	)
}

const Projects = () => {

	const list = [
		{
			title: "a",
			description: "b",
			pic: pic,
			link: ""
		},
		{
			title: "a",
			description: "b",
			pic: pic,
			link: "https://www.google.com"
		},
		{
			title: "a",
			description: "b",
			pic: pic,
			link: ""
		},
		{
			title: "a",
			description: "b",
			pic: pic,
			link: ""
		},
		{
			title: "a",
			description: "b",
			pic: pic,
			link: ""
		}
	]

	return (
		<>
			<section className="portfolio" id="portfolio">
				<div className="main-text">
					<p>Portfolio</p>
					<h2><span>Latest</span> Projects</h2>
				</div>
				<div className="portfolio-content">
					{list.map((x, index) => project(x, index))}
				</div>
			</section>
		</>
	);
}

export default Projects;