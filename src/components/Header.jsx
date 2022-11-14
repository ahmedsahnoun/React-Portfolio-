import logo from "../Assets/logo2.png"

const Header = () => {
	return (
		<header>
			<a href="#Home" cl ass="logo"><img src={logo} height="40" width="100" style={{ borderRadius: '5px' }} alt="" /></a>
			<ul class="navlist">
				<li><a href="#home" class="active">Home</a></li>
				<li><a href="#about">About Me</a></li>
				<li><a href="#services">Skills</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact Me</a></li>
			</ul>
			<div class="bx bx-menu" id="menu-icon" />
		</header>
	);
}

export default Header;