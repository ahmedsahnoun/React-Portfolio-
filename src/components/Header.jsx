import { useState } from "react";
import logo from "../Assets/logo2.png"

const Header = () => {

	const [offset,setOffset] = useState(0)
	
	window.addEventListener ("scroll", function() {
		setOffset(window.scrollY)
	});

	return (
		<header className={(offset > 100 && "sticky") || "header"}>
			<a href="#home" className="logo"><img src={logo} height="40" width="100" style={{ borderRadius: '5px' }} alt="" /></a>
			<ul className="navlist">
				<li><a href="#home" className="active">Home</a></li>
				<li><a href="#about">About Me</a></li>
				<li><a href="#services">Skills</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact Me</a></li>
			</ul>
		</header>
	);
}

export default Header;