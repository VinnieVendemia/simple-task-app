import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Home extends React.Component {
	render() {
		return (
      <div className='container'>
      	<h1>Simple Task App</h1>
      </div>
    );
	}
}


// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);