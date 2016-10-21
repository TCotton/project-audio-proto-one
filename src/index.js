// Create new component. This component should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCfoOI345aqeJ-_VBf3Cqb9mnGjDCCZCuA';

const APP = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

// Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<APP />, document.querySelector('.container'));

