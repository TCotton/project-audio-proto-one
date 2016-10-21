import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ''}
	}

	render() {
		// added value like value={this.state.term} creates a controlled component
		return (
			<div>
				<input onChange={event => this.setState({term: event.target.value})}/><br/>
			</div>
		);

	}


}

export default SearchBar;