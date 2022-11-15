import { useState } from "react";
// import logo from "../Assets/logo2.png"

const Header = () => {

	const [offset, setOffset] = useState(0)
	const [menu, setMenu] = useState(false)
	const [nav, setNav] = useState(false)

	window.addEventListener("scroll", function () {
		setOffset(window.scrollY)
		setNav(false)
		setMenu(false)
	});

	return (
		<header className={(offset > 100 && "sticky") || "header"}>
			<a href="#home" className="logo">A<span>S</span></a>
			<ul className={"navlist " + (nav && "open")}>
				<li><a href="#home" className="active">Home</a></li>
				<li><a href="#about">About Me</a></li>
				<li><a href="#services">Skills</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact Me</a></li>
			</ul>
			<div class={"bx bx-menu "+ (menu && "bx-x")} onClick={() => {setMenu(true); setNav(true)}} id="menu-icon"></div>
		</header>
	);
}

export default Header;