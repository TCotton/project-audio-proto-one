import React, {Component} from 'react';

class SearchBar extends Component {

	render() {
		return <input onChange={this.onInputChange} />;
	}

	// event handler
	onInputChange(event) {
		console.dir(event.target.value);
	}

}

export default SearchBar;