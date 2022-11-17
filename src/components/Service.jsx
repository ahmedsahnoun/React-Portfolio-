import { motion } from "framer-motion"

const skill = (details, index) => {
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
			<div className="box">
				<div className="s-icons">
					<i className={details.icon} ></i>
				</div>
				<h3>{details.title}</h3>
				<p>{details.description}</p>
			</div>
		</motion.div>
	)
}

const Service = () => {

	const list = [
		{
			title: "Front-end web development",
			icon: 'bx bx-desktop',
			description: "I create beautiful, responsive user interfaces for applications. "
			+"I am accustomed to using HTML, CSS, JavaScript and utilizing frameworks involving them. "
			+"I have recently been using react which I ised to create this very page.",
		},
		{
			title: "Back-end web development",
			icon: 'bx bx-server',
			description: "I am proficient at at creating and maintaining a backend architecture "
			+"handling business logic which includes server management, handling APIs and interacting with databases "
			+"I am familiar with both SQL, as well as NoSQL Database Management Systems.",
		},
		{
			title: "Business Intelligence",
			icon: 'bx bx-bar-chart-alt-2',
			description: "I am familiar with Business Intelligence Analysis. I worked on various applications that involved "
			+"Multi-Dimentinal data management and manipulation, as well as OLAP.",
		}
	]

	return (
		<section className="services" id="services">
			<div className="main-text">
				<p>What I am good at</p>
				<h2><span>My</span> Skills</h2>
			</div>
			<div className="services-content">
				{list.map((x, index) => skill(x, index))}
			</div>
		</section>
	);
}

export default Service;