import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import keys from '../config/keys';

class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount = () => {
		this.onSearchSubmit('bmx');
	}

	onSearchSubmit = async term => {
		const response = await youtube.get('/search', {
			params: { 
				q: term,
				part: "snippet",
				type: "video",
				maxResults: 5,
				key: keys.googleApi
			 }
		});

	this.setState({ videos: response.data.items,
					selectedVideo: response.data.items[0]
	 });
	console.log(this.state.videos);
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {

		return (
			<div className="ui container" style={{ marginTop: '10px'}}>
					<SearchBar onSubmit={this.onSearchSubmit} />
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>
							<div className="five wide column">
								<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
							</div>
						</div>
					</div>
			</div>
		);
	}


	
}

export default App;
