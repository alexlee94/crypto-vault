import React from "react";
import BgVideo from "../assets/BgVideo.mp4";

const bgVideo = () => {
	return (
		<div className="BgVideo-container">
			<video src={BgVideo} autoPlay loop muted />
		</div>
	);
};

export default bgVideo;
