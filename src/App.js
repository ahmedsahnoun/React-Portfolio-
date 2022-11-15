import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Service from "./components/Service.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import End from "./components/End.jsx";
import Topbar from "./components/topbar/Topbar.jsx";

const App = () => {
	return (
		<>
			<Header />
			<Topbar/>
			<Home />
			<About />
			<Service />
			<Projects />
			<Contact />
			<End />
		</>
	);
}

export default App;
