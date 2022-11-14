const All = () => {
	return (
		<div className="Home">
			<header>
				<a href="google.com" class="logo"><img src={"./img/logo2.png"} height="40" width="100" style={{borderRadius: '5px'}} alt=""/></a>
				<ul class="navlist">
					<li><a href="#home" class="active">Home</a></li>
					<li><a href="#about">About Me</a></li>
					<li><a href="#services">Skills</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#contact">Contact Me</a></li>
				</ul>

				<div class="bx bx-menu" id="menu-icon">

				</div>
			</header>
		</div>
	);
}

export default All;