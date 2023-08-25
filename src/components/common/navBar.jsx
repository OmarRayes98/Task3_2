import React from "react";
import { Link } from "react-router-dom";
import {NavLinksData} from '../../data/navlink';

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							{
								NavLinksData?.map(navLink => (
									<li
									key={navLink.id}
								className={
									active === navLink.classActive
										? "nav-item active"
										: "nav-item" }
							>
							<Link to={navLink.toPage}>{navLink.name}</Link>
							</li>
								))
							}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
