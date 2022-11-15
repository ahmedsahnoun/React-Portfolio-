import { motion } from "framer-motion"

const skill = (details, index) => {
	return(
		<motion.div
			key={index}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.1*index }}
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

	const list =[
		{
			icon:'bx bx-code-alt',
			title:"Mobile & Web Development",
			description:"lol"
		},
		{
			icon:'bx bx-code-alt',
			title:"Mobile & Web Development",
			description:"lol"
		},
		{
			icon:'bx bx-code-alt',
			title:"Mobile & Web Development",
			description:"lol"
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