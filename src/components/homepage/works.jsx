import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={facebook}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								Full Stack Web Developer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						<div className="work">
							<img
								src={twitter}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
							Full Stack Web Developer
							</div>
							<div className="work-duration">2012 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
