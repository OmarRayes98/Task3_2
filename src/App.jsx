import { useEffect } from "react";
import { Routes, Route  ,useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import ScrollToTop from "./components/common/scrollToTop";
import Footer from "./components/common/footer";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./App.css";

function App() {

	const routePath = useLocation();

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);


	return (
		<div className="App page-content">
			<ScrollToTop routePath={routePath}>

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>

			<div className="page-footer">
						<Footer />
					</div>
			
			</ScrollToTop>

		</div>
	);
}

export default App;
