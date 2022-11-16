import { useState } from "react";
import Topbar from "./topbar/Topbar.jsx";

const Header = () => {

	const phone = window.innerWidth < 700
	const [menu, setMenu] = useState(false)
	const [nav, setNav] = useState(false)

	const [current, setCurrent] = useState("")
	const [offset, setOffset] = useState(0)
	const sections = document.querySelectorAll("section[id]");

	const scrollActive = () => {
		const scrollY = window.pageYOffset;
		sections.forEach((current) => {
			const sectionHeight = current.offsetHeight
			const sectionTop = current.offsetTop - 300
			const sectionId = current.getAttribute("id")
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
				setCurrent(sectionId)
		});
	};

	window.addEventListener("scroll", function () {
		setOffset(window.scrollY)
		setNav(false)
		setMenu(false)
		scrollActive()
	});

	return (
		<>
			<header className={(offset > 100 && "sticky") || "header"}>
				<a href="#home" className="logo">A<span>S</span></a>
				<ul className={"navlist " + (nav && "open")}>
					<li><a href="#home" className={((current === "home") && "active") || ""}>Home</a></li>
					<li><a href="#about" className={((current === "about") && "active") || ""}>About Me</a></li>
					<li><a href="#services" className={((current === "services") && "active") || ""}>Skills</a></li>
					<li><a href="#portfolio" className={((current === "portfolio") && "active") || ""}>Portfolio</a></li>
					<li><a href="#contact" className={((current === "contact") && "active") || ""}>Contact Me</a></li>
				</ul>
				<div className={"bx bx-menu " + (menu && "bx-x")} onClick={() => { setMenu(true); setNav(true) }} id="menu-icon"></div>
			</header>
			{phone && <Topbar />}
		</>
	);
}

export default Header;