// Create new component. This component should produce some HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCfoOI345aqeJ-_VBf3Cqb9mnGjDCCZCuA';


class APP extends Component {

	constructor(props) {
		super(props);
		this.state = {videos: []};

		YTSeach({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({videos});
		});

	}

	render() {

		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);

	}

}

// Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<APP />, document.querySelector('.container'));

