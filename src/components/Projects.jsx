import pic from "../Assets/portfolio1.jpg"

const project = (details) => {
	return (
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
					{list.map((x) => project(x))}
				</div>
			</section>
		</>
	);
}

export default Projects;