// Create new component. This component should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';

const APP = () => {
	return <div>Hello World!</div>;
};

// Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<APP />, document.querySelector('.container'));

