// Create new component. This component should produce some HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCfoOI345aqeJ-_VBf3Cqb9mnGjDCCZCuA';


class APP extends Component {

	constructor(props) {

		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSeach({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});

	}

	render() {

		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);

	}

}

// Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<APP />, document.querySelector('.container'));

