import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {term: 'yes'}
	}

	render() {
		// added value like value={this.state.term} creates a controlled component
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})}/><br/>
				Value of the input: {this.state.term}<br/>
			</div>
		);

	}


}

export default SearchBar;