import React from 'react';

const VideoDetail = ({video}) => {
	switch(null) {
		case video: return (						
						  <div className="ui active inverted dimmer">
						    <div className="ui text loader">Loading</div>
						  </div>						
					);

		default: return (
					<div>
						<div className="ui embed">
							<iframe title={video.snippet.title} width="420" height="315" src={ `https://www.youtube.com/embed/${video.id.videoId}` }>
							</iframe>
						</div>
						<div className="ui segment">
							<h4 className="ui header" >{video.snippet.title}</h4>
							<p>{video.snippet.description}</p>
						</div>
					</div>
				)
	}
	
}

export default VideoDetail;

