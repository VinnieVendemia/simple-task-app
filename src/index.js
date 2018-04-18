import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Card extends React.Component {
	render () {
		return (
			<div class="card">
			  <div class="card-header">
			    Featured
			  </div>
			  <div class="card-body">
			    <h5 class="card-title">Special title treatment</h5>
			    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
			    <a href="#" class="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
		)
	}
}

class Home extends React.Component {
	render() {
		return (
      <div className='container'>
      	<h1>Simple Task App</h1>
				<Card/>
      </div>
    );
	}
}


// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);