import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ''}
	}

	render() {
		// added value like value={this.state.term} creates a controlled component
		return (
			<div className="search-bar">
				<input onChange={event => this.onInputChange(event.target.value)} /><br/>
			</div>
		);

	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;